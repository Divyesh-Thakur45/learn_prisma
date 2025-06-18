import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Create() {
    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <form suppressHydrationWarning >
                <Card className="w-[120%] max-w-sm p-5">
                    <div className="flex flex-col gap-6">

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label suppressHydrationWarning htmlFor="image">image</Label>
                            </div>
                            <Input id="image" type="file" />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="name">name</Label>
                            </div>
                            <Input suppressHydrationWarning id="name" type="text" />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="price">price</Label>
                            </div>
                            <Input suppressHydrationWarning id="price" type="text" />
                        </div>

                    </div>
                    <Button suppressHydrationWarning>Create</Button>
                </Card>
            </form>
        </div>
    )
}

