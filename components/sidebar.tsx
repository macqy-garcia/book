import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  let newArray = Array.from({ length: 20 }, (value, index) => index);
  return (
    <div className="w-screen flex justify-between items-center p-2 bg-slate-100 dark:bg-slate-900">
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-slate-900 dark:stroke-slate-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Purchased Book(s)</SheetTitle>
            <SheetDescription>
              {/* Accordion start */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <p className="text-lg text-blue-900 font-bold">
                      Jose Rizal Second Edition
                    </p>
                  </AccordionTrigger>
                  <div className="grid grid-cols-3 gap-2">
                    {newArray.map((page) => (
                      <AccordionContent className="cursor-pointer hover:text-black ">
                        Page {page + 1}
                      </AccordionContent>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
              {/* Accordion end */}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
