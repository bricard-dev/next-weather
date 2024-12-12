import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="p-6 border-t bg-muted">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/bricard-dev"
            className="text-primary hover:text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/bastienricard/"
            className="text-primary hover:text-muted-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:bastien.ricard-pro@outlook.com"
            className="text-primary hover:text-muted-foreground"
          >
            <MailIcon className="w-4 h-4" />
          </a>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>Developped with Next.js, Shadcn/UI and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
