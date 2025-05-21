import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type EmojiType = '👽' | '❤' | '😊' | '👍' | '🎁' | '🤠' | '💯' | '🧢';

interface Reaction {
  emoji: EmojiType;
  count: number;
  reacted: boolean;
}

interface CommentReactionsProps {
  commentId: string;
}

const CommentReactions: React.FC<CommentReactionsProps> = ({ commentId }) => {
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: '👽', count: 0, reacted: false },
    { emoji: '❤', count: 0, reacted: false },
    { emoji: '😊', count: 0, reacted: false },
    { emoji: '👍', count: 0, reacted: false },
    { emoji: '🎁', count: 0, reacted: false },
    { emoji: '🤠', count: 0, reacted: false },
    { emoji: '💯', count: 0, reacted: false },
    { emoji: '🧢', count: 0, reacted: false },
  ]);

  const toggleReaction = (index: number) => {
    setReactions(prev => {
      const newReactions = [...prev];
      const reaction = newReactions[index];
      newReactions[index] = {
        ...reaction,
        count: reaction.reacted ? reaction.count - 1 : reaction.count + 1,
        reacted: !reaction.reacted
      };
      return newReactions;
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {reactions.map((reaction, index) => (
        <TooltipProvider key={`${commentId}-${reaction.emoji}`}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={`px-3 py-1 h-auto text-xl ${reaction.reacted ? 'bg-gray-100 font-bold' : ''}`}
                onClick={() => toggleReaction(index)}
              >
               <span
                  className={`text-lg mr-1 ${reaction.emoji === '❤' ? 'text-red-500' : ''}`}
                >
                  {reaction.emoji}
                </span>
                {reaction.count > 0 && <span className="text-sm">{reaction.count}</span>}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{reaction.reacted ? 'Remove reaction' : 'Add reaction'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default CommentReactions;
