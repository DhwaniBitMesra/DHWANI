"use client";

import React from 'react';


interface MusicTrack {
    title: string;
    embedUrl: string;
    description?: string;
}

export const MusicSection = ({ musicTracks = [] }: { musicTracks?: MusicTrack[] }) => {
    // Default fallback if empty props passed (should be handled by parent/api but good for safety)
    const tracksToDisplay = musicTracks.length > 0 ? musicTracks : [
        {
            title: "Dhwani Soundcloud Playlist",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1207990405&color=%23250c0b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            description: "Dhwani - Music Club, BIT Mesra"
        }
    ];

    return (
        <section className="py-20 bg-zinc-900 text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                        Our Sound
                    </h2>
                    <p className="text-gray-400">
                        Experience the rhythm and soul of Dhwani through our latest releases on SoundCloud.
                    </p>
                </div>

                <div className="space-y-8">
                    {tracksToDisplay.map((track, idx) => (
                        <div key={idx} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden">
                            <iframe
                                width="100%"
                                height="450"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src={track.embedUrl}
                                className="rounded-xl"
                                title={track.title}
                            ></iframe>
                            <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100, marginTop: '10px' }}>
                                {track.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

