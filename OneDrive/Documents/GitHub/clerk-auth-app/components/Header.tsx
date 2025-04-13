"use client";
import {Shield} from "lucide-react"; 
import React from "react";
import Link from "next/link";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export const Header = () => {
    return (
        <div>
            <Link href="/"><Shield></Shield><h1>Jung<samp></samp> s App</h1></Link>

            <div>
                <SignedIn>
                    <UserButton></UserButton>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal"></SignInButton>
                </SignedOut>
            </div>
        </div>
    )
}