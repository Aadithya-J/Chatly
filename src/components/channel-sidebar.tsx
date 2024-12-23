'use client';

import { type Channel,ChannelType } from '@prisma/client';
import { ScrollArea } from '~/components/ui/scroll-area';
import { ChannelButton } from './channel-button';
import ServerDropdown from './server-dropdown';

interface ChannelSidebarProps {
  channels: Channel[];
  selectedChannelId: string;
  serverId: string;
  onChannelSelect: (channelId: string) => void;
  serverName: string;
}

export function ChannelSidebar({
  channels,
  selectedChannelId,
  onChannelSelect,
  serverName,
  serverId
}: ChannelSidebarProps) {
  const textChannels = channels.filter(c => c.type === ChannelType.TEXT);
  const voiceChannels = channels.filter(c => c.type === ChannelType.VOICE);
  
  return (
    <div className="relative h-full w-60 bg-[#e6e6e6]">
      {/* <div className="p-4 border-b border-[#2c2e32]">
        <h2 className="text-base font-semibold text-slate-600 truncate">{serverName}</h2>
      </div> */}
      <ServerDropdown serverName={serverName} serverId={serverId}/>
      <ScrollArea className="h-[calc(100%-4rem)]">
        <div className="p-2 space-y-4">
          {textChannels.length > 0 && (
            <div className="space-y-[2px]">
              <h3 className="px-2 text-xs font-semibold text-zinc-400 uppercase mb-1">
                Text Channels
              </h3>
              {textChannels.map((channel) => (
                <ChannelButton
                  key={channel.id}
                  channel={channel}
                  isSelected={selectedChannelId === channel.id}
                  onClick={() => onChannelSelect(channel.id)}
                />
              ))}
            </div>
          )}
          {voiceChannels.length > 0 && (
            <div className="space-y-[2px]">
              <h3 className="px-2 text-xs font-semibold text-zinc-400 uppercase mb-1">
                Voice Channels
              </h3>
              {voiceChannels.map((channel) => (
                <ChannelButton
                  key={channel.id}
                  channel={channel}
                  isSelected={selectedChannelId === channel.id}
                  onClick={() => onChannelSelect(channel.id)}
                />
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}