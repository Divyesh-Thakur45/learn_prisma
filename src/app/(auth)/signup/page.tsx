import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "lucide-react";

export default function Signup() {
    return (
        <div className="">
            <p className="text-2xl font-medium flex justify-center my-[50px]">Signup page</p>
            <form className="flex justify-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Signup to your account</CardTitle>
                        <CardDescription>
                            Enter your email below to Signup to your account
                        </CardDescription>
                        <CardAction>
                            <Link href={"/login"}>Login</Link>
                        </CardAction>
                    </CardHeader>
                    <CardContent>

                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    suppressHydrationWarning
                                    id="email"
                                    type="email"
                                    placeholder="xyz@example.com"
                                // onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input suppressHydrationWarning id="password" type="password"
                                // onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button suppressHydrationWarning type="submit" className="w-full">
                            Signup
                        </Button>
                        <Button suppressHydrationWarning variant="outline" className="w-full">
                            Signup with Google
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div >
    )
}

