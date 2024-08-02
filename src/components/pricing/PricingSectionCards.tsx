"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { allFeatures, pricingPlans } from "@/lib/pricingPlans";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

export default function PricingSectionCards() {
    const [isAnnual, setIsAnnual] = useState(false);
    const [currency, setCurrency] = useState<"usd" | "eur">("usd");

    return (
        <>
            <div className="py-24 lg:py-32">
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        Pricing
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                        Whatever your status, our offers evolve according to
                        your needs.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="flex items-center">
                        <Label htmlFor="currency" className="me-3">
                            Currency
                        </Label>
                        <Select
                            onValueChange={(value: "usd" | "eur") =>
                                setCurrency(value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="usd">USD</SelectItem>
                                <SelectItem value="eur">EUR</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center">
                        <Label htmlFor="payment-schedule" className="me-3">
                            Monthly
                        </Label>
                        <Switch
                            id="payment-schedule"
                            onCheckedChange={(checked) => setIsAnnual(checked)}
                        />
                        <Label htmlFor="payment-schedule" className="ms-3">
                            Annual
                            <span className="ml-2 text-xs text-muted-foreground">
                                (Save up to 10%)
                            </span>
                        </Label>
                    </div>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-3 lg:items-center">
                    {pricingPlans.map((plan) => (
                        <Card
                            key={plan.title}
                            className={plan.mostPopular ? "border-primary" : ""}
                        >
                            <CardHeader className="pb-2 text-center">
                                {plan.mostPopular && (
                                    <Badge className="mb-3 w-max self-center uppercase">
                                        Most popular
                                    </Badge>
                                )}
                                <CardTitle className="mb-7">
                                    {plan.title}
                                </CardTitle>
                                <span className="text-5xl font-bold">
                                    {plan.title === "Specter Plan (Free)"
                                        ? plan.price
                                        : isAnnual
                                          ? (plan.annualPrice?.[currency] ??
                                            "N/A")
                                          : (plan.monthlyPrice?.[currency] ??
                                            "N/A")}
                                </span>

                                <p className="text-sm text-muted-foreground">
                                    {isAnnual ? "per year" : "per month"}
                                </p>
                            </CardHeader>
                            <CardDescription className="text-center">
                                {plan.description}
                            </CardDescription>
                            <CardContent>
                                <ul className="mt-7 space-y-2.5 text-sm">
                                    {plan.features
                                        .slice(0, 3)
                                        .map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex space-x-2"
                                            >
                                                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                                <span className="text-muted-foreground">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant={
                                        plan.title === "Specter Plan (Free)"
                                            ? "outline"
                                            : "default"
                                    }
                                >
                                    Sign up
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-12">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Features</TableHead>
                                <TableHead>Specter Plan</TableHead>
                                <TableHead>Phantom Plan</TableHead>
                                <TableHead>Poltergeist Plan</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {allFeatures.map((feature, index) => (
                                <TableRow key={index}>
                                    <TableCell>{feature}</TableCell>
                                    <TableCell>
                                        {pricingPlans[0].features.includes(
                                            feature,
                                        ) ? (
                                            <CheckIcon className="h-4 w-4 text-green-500" />
                                        ) : (
                                            "-"
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {pricingPlans[0].features.includes(
                                            feature,
                                        ) ||
                                        pricingPlans[1].features.includes(
                                            feature,
                                        ) ? (
                                            <CheckIcon className="h-4 w-4 text-green-500" />
                                        ) : (
                                            "-"
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {pricingPlans[0].features.includes(
                                            feature,
                                        ) ||
                                        pricingPlans[1].features.includes(
                                            feature,
                                        ) ||
                                        pricingPlans[2].features.includes(
                                            feature,
                                        ) ? (
                                            <CheckIcon className="h-4 w-4 text-green-500" />
                                        ) : (
                                            "-"
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}
