
import { Client } from '@notionhq/client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type NotionFaqItemRaw = {
  id: string;
  question: string;
  answer: string;
  category: string;
  categoryOrder: number;
  questionOrder: number;
};

type ProcessedFaqItem = {
  question: string;
  answer: string;
};

type ProcessedFaqCategory = {
  title: string;
  items: ProcessedFaqItem[];
};

// Helper to extract plain text from Notion rich text or title arrays
const getPlainText = (textArray: any[] | undefined): string => {
  if (!textArray || textArray.length === 0) return "";
  return textArray.map((rt: any) => rt.plain_text || '').join('');
};

async function fetchFaqsFromNotion(): Promise<ProcessedFaqCategory[] | null> {
  const notionApiKey = process.env.NOTION_INTEGRATION_SECRET;
  const faqDatabaseId = process.env.NOTION_DATABASE_ID__FAQ;

  if (!notionApiKey || !faqDatabaseId) {
    console.error("Notion API Key or FAQ Database ID is not configured in environment variables.");
    return null;
  }

  const notion = new Client({ auth: notionApiKey });

  try {
    const response = await notion.databases.query({
      database_id: faqDatabaseId,
      sorts: [
        { property: "Category Order", direction: "ascending" },
        { property: "Question Order", direction: "ascending" },
      ],
    });

    if (!response.results || response.results.length === 0) {
      console.log("No FAQ items found in Notion.");
      return null;
    }

    const rawFaqItems: NotionFaqItemRaw[] = response.results.map((page: any) => {
      const properties = page.properties;
      
      return {
        id: page.id,
        question: getPlainText(properties.Question?.title) || "Unnamed Question", // Changed from properties.Name to properties.Question
        answer: getPlainText(properties.Answer?.rich_text) || "No answer provided.",
        category: properties.Category?.select?.name || "Uncategorized",
        categoryOrder: properties["Category Order"]?.number ?? 999,
        questionOrder: properties["Question Order"]?.number ?? 999,
      };
    });

    const categoriesMap = new Map<string, { categoryOrder: number; items: ProcessedFaqItem[] }>();

    for (const item of rawFaqItems) {
      if (!categoriesMap.has(item.category)) {
        categoriesMap.set(item.category, { categoryOrder: item.categoryOrder, items: [] });
      }
      const categoryEntry = categoriesMap.get(item.category);
      if (categoryEntry) {
        categoryEntry.items.push({ question: item.question, answer: item.answer });
      }
    }
    
    const processedCategories: ProcessedFaqCategory[] = Array.from(categoriesMap.entries())
      .sort(([, aData], [, bData]) => aData.categoryOrder - bData.categoryOrder)
      .map(([title, data]) => ({
        title,
        items: data.items, 
      }));

    return processedCategories.length > 0 ? processedCategories : null;

  } catch (error) {
    console.error("Error fetching FAQs from Notion:", error);
    return null;
  }
}

export default async function FaqSection() {
  const faqCategories = await fetchFaqsFromNotion();

  if (!faqCategories) {
    return null; 
  }

  return (
    <section id="faq" className="pt-24 pb-12 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-primary">
            FAQ
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Frequently Asked Questions
          </p>
        </div>

        {faqCategories.map((category, categoryIndex) => (
          <div key={category.title} className={`mb-12 ${categoryIndex > 0 ? 'pt-8' : ''}`}>
            <h3 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-8 text-left">
              {category.title}
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-1">
              {category.items.map((item) => (
                <AccordionItem key={item.question} value={item.question} className="border-b border-border last:border-b-0">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex w-full flex-1 items-center justify-between text-left hover:no-underline py-6 text-lg font-body font-medium text-foreground"
                      )}
                    >
                      <span className="flex-1 pr-4">{item.question}</span>
                      <div className="relative h-5 w-5">
                        <Plus
                          className={cn(
                            "absolute top-0 left-0 h-5 w-5 text-primary shrink-0 transition-opacity duration-200 ease-in-out",
                            "group-data-[state=open]:opacity-0 opacity-100"
                          )}
                          aria-hidden="true"
                        />
                        <Minus
                          className={cn(
                            "absolute top-0 left-0 h-5 w-5 text-primary shrink-0 transition-opacity duration-200 ease-in-out",
                            "group-data-[state=open]:opacity-100 opacity-0"
                          )}
                          aria-hidden="true"
                        />
                      </div>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6 pr-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
