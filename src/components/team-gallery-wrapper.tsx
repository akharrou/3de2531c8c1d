
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Mail, Phone, Linkedin as LinkedinIcon } from 'lucide-react';
import type { TeamMember } from '@/app/about/our-team/page'; // Ensure this path is correct
import { cn } from '@/lib/utils';

// Define XLogo here or ensure it's importable and stylable
const XLogo = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-4 w-4", className)} // Default size for card icons
    fill="currentColor"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M6.5605469,3 L20.001953,20.6875 L6.96875,38 L10.03125,38 L21.53125,22.65625 L31.599609,38 L43.439453,38 L28.908203,19.160156 L42.439453,3 L39.371094,3 L27.341797,17.34375 L18.400391,3 L6.5605469,3 z M12.03125,5 L16.96875,5 L37.96875,36 L33.03125,36 L12.03125,5 z" />
  </svg>
);

interface TeamMemberCardProps {
  member: TeamMember;
  onViewProfile: (member: TeamMember) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onViewProfile }) => {
  return (
    <div
      className="relative rounded-2xl shadow-xl overflow-hidden aspect-square cursor-pointer group animate-fadeInUp"
      onClick={() => onViewProfile(member)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onViewProfile(member);}}
      aria-label={`View details for ${member.name}`}
    >
      <Image
        src={member.imageUrl}
        alt={member.name}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        data-ai-hint={member.dataAiHint}
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Social Icons */}
      {(member.socials?.x || member.socials?.linkedin) && (
        <div className="absolute top-3 right-3 z-20 flex space-x-1.5">
          {member.socials.x && (
            <a
              href={member.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
              aria-label={`${member.name} on X`}
              onClick={(e) => e.stopPropagation()}
            >
              <XLogo className="h-4 w-4" />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
              aria-label={`${member.name} on LinkedIn`}
              onClick={(e) => e.stopPropagation()}
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
        <h3 className="font-headline text-lg sm:text-xl font-semibold truncate">{member.name}</h3>
        <p className="text-xs sm:text-sm opacity-90 truncate">{member.role}</p>
      </div>
    </div>
  );
};

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0 rounded-lg shadow-2xl">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md flex-shrink-0">
              <Image src={member.imageUrl} alt={member.name} fill className="object-cover" data-ai-hint={member.dataAiHint} />
            </div>
            <div>
              <DialogTitle className="font-headline text-2xl md:text-3xl text-primary">{member.name}</DialogTitle>
              <DialogDescription className="text-base text-accent font-medium pt-1">{member.role}</DialogDescription>
              {member.department && <p className="text-sm text-muted-foreground mt-1">Department: {member.department}</p>}
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="flex-grow overflow-y-auto px-6">
          <div className="space-y-5 py-6">
            <div>
              <h4 className="text-lg font-semibold font-headline mb-1.5 text-primary">Biography</h4>
              {member.bio.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-2.5 text-sm">{paragraph}</p>
              ))}
            </div>
            {member.responsibilities && member.responsibilities.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold font-headline mb-1.5 text-primary">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  {member.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}
            {(member.contact && (member.contact.email || member.contact.phone)) && (
              <div>
                <h4 className="text-lg font-semibold font-headline mb-1.5 text-primary">Contact</h4>
                <div className="space-y-1 text-sm">
                  {member.contact.email && (
                    <p className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2 text-accent"/> <a href={`mailto:${member.contact.email}`} className="hover:text-primary">{member.contact.email}</a>
                    </p>
                  )}
                  {member.contact.phone && (
                     <p className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2 text-accent"/> <a href={`tel:${member.contact.phone}`} className="hover:text-primary">{member.contact.phone}</a>
                    </p>
                  )}
                </div>
              </div>
            )}
            {(member.socials?.x || member.socials?.linkedin) && (
              <div>
                <h4 className="text-lg font-semibold font-headline mb-1.5 text-primary">Socials</h4>
                <div className="flex space-x-4 items-center">
                  {member.socials.x && (
                    <a
                      href={member.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                      aria-label={`${member.name} on X`}
                    >
                      <XLogo className="h-5 w-5 mr-1.5" /> X Profile
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="h-5 w-5 mr-1.5" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-6 border-t border-border flex justify-end">
          <DialogClose asChild>
            <Button variant="outline" className="rounded-lg" onClick={onClose}>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};


interface TeamGalleryWrapperProps {
  teamMembers: TeamMember[];
  allRoles: string[];
}

const TeamGalleryWrapper: React.FC<TeamGalleryWrapperProps> = ({ teamMembers, allRoles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleRoleChange = (role: string, checked: boolean) => {
    setSelectedRoles(prev => {
      const newRoles = checked ? [...prev, role] : prev.filter(r => r !== role);
      return newRoles;
    });
  };
  
  const handleSelectAllRoles = (checked: boolean) => {
    if (checked) {
      setSelectedRoles([]); 
    } 
  };

  const filteredMembers = useMemo(() => {
    return teamMembers.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            member.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRoles.length === 0 || selectedRoles.includes(member.role);
      return matchesSearch && matchesRole;
    });
  }, [teamMembers, searchTerm, selectedRoles]);

  const handleViewProfile = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const isAllSelected = selectedRoles.length === 0;

  return (
    <div className="md:grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12">
      {/* Filters Pane */}
      <aside className="md:col-span-3 lg:col-span-3 space-y-8 mb-12 md:mb-0">
        <div>
          <Label htmlFor="search-team" className="sr-only">Search Team Members</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              id="search-team"
              type="text"
              placeholder="Search by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="font-headline text-lg font-semibold text-primary mb-3">Roles</h3>
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="role-all"
                checked={isAllSelected}
                onCheckedChange={(checked) => handleSelectAllRoles(Boolean(checked))}
              />
              <Label htmlFor="role-all" className="font-medium text-sm cursor-pointer">All Roles</Label>
            </div>
            <hr className="border-border my-2"/>
            {allRoles.map(role => (
              <div key={role} className="flex items-center space-x-2">
                <Checkbox
                  id={`role-${role.toLowerCase().replace(/\s+/g, '-')}`}
                  checked={selectedRoles.includes(role)}
                  onCheckedChange={(checked) => {
                    handleRoleChange(role, Boolean(checked));
                  }}
                />
                <Label htmlFor={`role-${role.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm cursor-pointer">
                  {role}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Gallery Pane */}
      <div className="md:col-span-9 lg:col-span-9">
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                onViewProfile={handleViewProfile} 
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center col-span-full py-10">
            No team members match your current filters.
          </p>
        )}
      </div>

      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TeamGalleryWrapper;
