import type { Route } from "./+types/home.route";
import { Linkedin, Mail, GitBranch, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Chip } from "~/components/ui/chip";
import { Link } from "react-router";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coy Nelson" },
    { name: "description", content: "Coy Nelson is a front-end developer" },
  ];
}

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const primaryTools = ["React", "TypeScript", "JavaScript", "CSS"];
  const secondaryTools = [
    "Node.js",
    "Python",
    "SQL",
    "Data Structures",
    "Algorithms",
  ];
  const primarySkills = ["React", "TypeScript", "JavaScript", "CSS"];
  const secondarySkills = [
    "Node.js",
    "Python",
    "SQL",
    "Data Structures",
    "Algorithms",
  ];
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@robertmartin.dev");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="pb-20">
      <div className="mt-[40vh] flex flex-col gap-30">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal min-h-[100px] lg:min-h-[124px] max-w-xs md:max-w-md lg:max-w-xl text-nowrap">
          Coy Nelson
          <br />
          Front-end Developer
        </h1>

        {/* Summary Section */}
        <div className="grid grid-cols-1 gap-x-12">
          <p className="text-lg lg:text-2xl max-w-4xl">
            Experienced Staff Software Engineer specializing in full-stack
            development and software project leadership. Skilled in React.js,
            SQL, TypeScript, Python, Node.js, data structures, and algorithms.
            Proven track record at FAANG and seeded startups.
          </p>
          {/* Contact Header */}
          <div className="grid grid-cols-1 gap-x-12 my-16">
            <div className="flex flex-wrap items-baseline gap-4 sm:gap-6 lg:gap-8 text-sm">
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 sm:px-4"
                asChild
              >
                <Link to="https://github.com/RobLMartin">
                  <GitBranch className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    github.com/RobLMartin
                  </span>
                  <span className="sm:hidden">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 sm:px-4"
                asChild
              >
                <Link to="https://linkedin.com/in/roblmartin">
                  <Linkedin className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    linkedin.com/in/roblmartin
                  </span>
                  <span className="sm:hidden">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 sm:px-4"
              >
                <MapPin className="w-4 h-4" /> Remote
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 sm:px-4"
                onClick={copyEmail}
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {emailCopied ? "Copied!" : "hello@robertmartin.dev"}
                </span>
                <span className="sm:hidden">
                  {emailCopied ? "Copied!" : "Email"}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div className="max-w-4xl">
          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-x-12 gap-y-8 lg:gap-y-16">
            {/* Tools Section */}
            <h2 className="text-xl font-normal text-text-muted lg:text-right">
              Tools
            </h2>
            <div>
              <div className="flex flex-wrap gap-2">
                {primaryTools.map((tool) => (
                  <Chip key={tool}>{tool}</Chip>
                ))}
                {secondaryTools.map((tool) => (
                  <Chip key={tool} variant="secondary">
                    {tool}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <h2 className="text-xl font-normal text-text-muted lg:text-right">
              Skills
            </h2>
            <div>
              <div className="flex flex-wrap gap-2">
                {primarySkills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
                {secondarySkills.map((skill) => (
                  <Chip key={skill} variant="secondary">
                    {skill}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <h2 className="text-xl font-normal text-text-muted lg:text-right">
              Experience
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  Virtu Studios{" "}
                  <span className="font-normal">Frontend Developer</span>
                </h3>
                <p className="text-sm mb-3">
                  Built and maintained a web-based design and prototyping tool
                  for creating interactive user interfaces using React.js,
                  TypeScript, and Node.js.
                </p>
                <p className="text-sm text-text-muted">
                  Jan 2024 - Present — Remote
                </p>
              </div>
            </div>

            {/* Education Section */}
            <h2 className="text-xl font-normal text-text-muted lg:text-right">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">
                  University of California, Los Angeles
                </h3>
                <p className="text-sm">
                  Bachelor of Science in Computer Science
                </p>

                <p className="text-sm mt-2">Graduated with honors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
