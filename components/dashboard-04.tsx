import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "./ui/separator";
import TimeOffList from "./TimeOffList";
import { timeOffs } from "@/constants";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 p-[32px 24px 0px 24px] z-40">
        <Link
          href="#"
          className="whitespace-nowrap text-lg font-semibold md:text-base "
        >
          HarmonyHR
        </Link>
        <nav className="hidden flex-col gap-[10px] text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
          <div className="flex gap-4 ml-4 absolute p-4 bottom-0 font-normal">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              My Info
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              People
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Hiring
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Reports
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Files
            </Link>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-[395px]"
              />
            </div>
          </form>
          <div>
            <Button className="bg-inherit border-none shadow-none hover:bg-inherit">
              <Image
                src="/settings.svg"
                alt="settings"
                width={24}
                height={24}
              />
            </Button>
            <Button className="bg-inherit border-none shadow-none hover:bg-inherit">
              <Image src="/question.svg" alt="faq" width={24} height={24} />
            </Button>
            <Button className="bg-inherit border-none shadow-none hover:bg-inherit">
              <Image
                src="/bell.svg"
                alt="notifications"
                width={21}
                height={24}
              />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="h-[200px] bg-head grid grid-cols-8 gap-4 px-4 md:gap-8 md:px-10 z-20">
        <div className="font-semibold text-3xl col-start-3 col-span-4 flex items-center">
          <h1>Aleksandra Kuibishevskaya</h1>
        </div>
      </div>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))]  gap-4 bg-muted px-4 pb-4 md:gap-8 md:px-10 md:pb-10">
        <nav
          className="grid gap-4 text-sm  font-medium min-w-[200px] h-fit z-30 relative bottom-2"
          x-chunk="A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings."
          x-chunk-container="chunk-container after:right-0"
        >
          <Card className="bg-background h-fit">
            <CardContent className="flex flex-col gap-4 p-6">
              <p>89999999</p>
              <p>primer@primer.com</p>
              <div className="grid grid-cols-3 gap-2 max-w-20">
                <Link href="#">
                  <Image
                    src="/Linkedin.svg"
                    alt="Linkedin link"
                    width={15}
                    height={16}
                  />
                </Link>
                <Link href="#">
                  <Image
                    className="relative left-[1px]"
                    src="/Facebook.svg"
                    alt="Facebook link"
                    width={9}
                    height={16}
                  />
                </Link>
                <Link href="#">
                  <Image
                    className="relative top-[2px]"
                    src="/Twitter.svg"
                    alt="Twitter link"
                    width={16}
                    height={13}
                  />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background h-fit">
            <CardContent className="flex flex-col gap-4 p-6">
              <p>Hire date</p>
              <div className="gap-2">
                <p>Sep. 3, 202</p>
                <p>3y-9m-20d</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background h-fit">
            <CardContent className="flex flex-col gap-2 p-6">
              <div className="inline-flex gap-1">
                <Image
                  src="/Hashtag.svg"
                  alt="Hashtag"
                  width={16}
                  height={16}
                />
                <p> 5</p>
              </div>
              <div className="inline-flex gap-1">
                <Image src="/Clock.svg" alt="Hashtag" width={16} height={16} />
                Full-time
              </div>
              <div className="inline-flex gap-1">
                <Image src="/Group.svg" alt="Hashtag" width={16} height={16} />
                Operations
              </div>
              <div className="inline-flex gap-1">
                <Image src="/Globe.svg" alt="Hashtag" width={16} height={16} />
                Europe
              </div>
              <div className="inline-flex gap-1">
                <Image
                  src="/Location.svg"
                  alt="Hashtag"
                  width={16}
                  height={16}
                />
                London, UK
              </div>
            </CardContent>
          </Card>
          <Card className="bg-background h-fit">
            <CardContent className="flex flex-col gap-4 p-6">
              <p>Direct Reports</p>
              <div className="gap-2">
                <p>Sep. 3, 202</p>
                <p>3y-9m-20d</p>
              </div>
            </CardContent>
          </Card>
        </nav>
        <div className="grid gap-6 w-full z-10 relative bottom-2">
          <Card x-chunk="A form to update the store name.">
            <CardHeader className="pt-9 pb-3 px-3">
              <div className="flex justify-between">
                <div className="text-xl font-medium text-blue inline-flex gap-1 items-center">
                  <Image
                    src="/Schedule.svg"
                    alt="schedule"
                    width={16}
                    height={15}
                  />
                  <p>Time off</p>
                </div>
                <div className="text-dark font-medium text-sm flex gap-2 items-center">
                  <p>
                    Accural Level Start Date{" "}
                    <span>
                      <Link href="#" className="text-link">
                        03/09-2020
                      </Link>
                    </span>
                  </p>
                  <Button
                    variant="outline"
                    className="bg-inherit border-dark border-[1px]"
                  >
                    Add Time Off Policy
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="grid grid-cols-3 grid-rows-1 px-14 py-7 gap-8">
              <div>
                <Card className="bg-muted p-4  min-h-40 items-center flex justify-center">
                  <CardContent className="items-center flex flex-col p-0">
                    <h2 className="text-2xl font-semibold">Sick</h2>
                    <div className="inline-flex gap-2 items-center justify-center">
                      <Image
                        src="/Health.svg"
                        alt="Health"
                        width={30}
                        height={30}
                      />
                      <p className="text-3xl font-semibold">3</p>
                    </div>
                    <p className="font-semibold text-sm">Days available</p>
                    <p className="text-gray font-semibold text-sm">
                      1 day scheduled
                    </p>
                  </CardContent>
                </Card>
                <p className="text-center text-gray mt-4 font-semibold text-sm">
                  Sick Full-Time
                </p>
              </div>
              <div>
                <Card className="bg-muted p-4 min-h-40 items-center flex justify-center">
                  <CardContent className="items-center flex flex-col p-0">
                    <h2 className="text-2xl font-semibold">Annual leave</h2>
                    <div className="inline-flex gap-2 items-center justify-center">
                      <Image
                        src="/Mountain.svg"
                        alt="Mountain"
                        width={30}
                        height={30}
                      />
                      <p className="text-3xl font-semibold">10.3</p>
                    </div>
                    <p className="font-semibold text-sm">Days available</p>
                  </CardContent>
                </Card>
                <p className="text-center text-gray mt-2">Sick Full-Time</p>
              </div>
              <div>
                <Card className="bg-muted p-4  min-h-40 items-center flex justify-center">
                  <CardContent className="items-center flex flex-col p-0">
                    <h2 className="text-2xl font-semibold">
                      Comp/in Lieu Time
                    </h2>
                    <div className="inline-flex gap-2 items-center justify-center">
                      <Image
                        src="/Schedule.svg"
                        alt="Schedule"
                        width={30}
                        height={30}
                      />
                      <p className="text-3xl font-semibold">0</p>
                    </div>
                    <p className="font-semibold text-sm">Human Used(YTD)</p>
                  </CardContent>
                </Card>
                <p className="text-center text-gray mt-4 font-semibold text-sm">
                  Comp/in Lieu Time Flexible Policy
                </p>
              </div>
            </CardContent>
            <TimeOffList timeOffs={timeOffs} />
            <CardContent></CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
