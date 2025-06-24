import Header from "@/components/landing/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata:Metadata = {
    title:{
        template:"Framix UI - Open Source UI Library",
        default:"Framix UI"
    }
}

export default function HomeLayout ({children}:{children:React.ReactNode}){
    return (
        <div>
            <Header/>
            <main className="relative w-full pt-0 md:pt-0 ">
                {children}
            </main>
            <Footer/>
        </div>
    );
}