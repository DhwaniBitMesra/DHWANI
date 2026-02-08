"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { newsItems } from "@/lib/news-data";

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params using React.use()
    const { slug } = use(params);

    const article = newsItems.find((item) => item.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-neutral-500 mb-8">Article not found in the archives.</p>
                    <Link href="/news" className="text-blue-500 hover:text-blue-400 font-mono text-sm uppercase underline">Return to Press Room</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-[#fffcf5] dark:bg-black text-neutral-900 dark:text-neutral-100 selection:bg-blue-200 dark:selection:bg-blue-900">

            {/* Navigation Bar Placeholder (Global Nav is sticky/fixed, so we just pad) */}
            <div className="h-20 bg-black">
                {/* Global nav handles this space */}
            </div>

            {/* Hero Header */}
            <header className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 lg:p-20 container mx-auto max-w-5xl">
                    <Link href="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm font-mono uppercase tracking-widest transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to News
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                            {article.category}
                        </span>
                        <span className="text-white/80 text-xs font-mono flex items-center gap-2">
                            <Clock className="w-3 h-3" /> {article.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-8 text-balance">
                        {article.title}
                    </h1>
                </div>
            </header>

            {/* Content Layout */}
            <div className="container mx-auto max-w-5xl px-6 md:px-12 py-16 flex flex-col md:flex-row gap-12">

                {/* Sidebar / Sticky Socials */}
                <div className="md:w-1/4">
                    <div className="sticky top-32 space-y-8">
                        <div className="border-t border-black/10 pt-4">
                            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">Written By</p>
                            <p className="font-bold">Dhwani Editorial Team</p>
                        </div>

                        <div className="border-t border-black/10 pt-4">
                            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">Share This</p>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4">
                    <p className="text-2xl md:text-3xl font-serif leading-relaxed text-neutral-800 dark:text-neutral-200 mb-10 drop-cap italic">
                        {article.excerpt}
                    </p>

                    <div className="prose prose-lg md:prose-xl prose-neutral dark:prose-invert max-w-none font-serif leading-loose">
                        <p className="first-letter:text-7xl first-letter:font-black first-letter:text-black dark:first-letter:text-white first-letter:mr-3 first-letter:float-left">
                            {article.content}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <blockquote>
                            &quot;Music is the silence between the notes.&quot;
                        </blockquote>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <h3>The Road Ahead</h3>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>

                    <div className="mt-20 pt-10 border-t border-black/10 dark:border-white/10">
                        <h3 className="text-xl font-bold mb-6">More from the Archive</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {newsItems.filter(i => i.slug !== slug).slice(0, 2).map((item, idx) => (
                                <Link key={idx} href={`/news/${item.slug}`} className="group block">
                                    <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
                                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <h4 className="font-bold text-lg leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                    <p className="text-sm text-neutral-500 mt-2">{item.date}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
