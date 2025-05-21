import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Star, Heart, Smile, ThumbsUp, Gift, Award, Rocket, Zap } from 'lucide-react';

type EmojiType = '👽' | '❤' | '😊' | '👍' | '🎁' | '🤠' | '💯' | '🧢';

interface Reaction {
  emoji: EmojiType;
  icon: React.ReactNode;
  count: number;
  reacted: boolean;
}

interface CommentReactionsProps {
  commentId: string;
}

const CommentReactions: React.FC<CommentReactionsProps> = ({ commentId }) => {
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: '👽', icon: <Star size={18} />, count: 0, reacted: false },
    { emoji: '❤', icon: <Heart size={18} />, count: 0, reacted: false },
    { emoji: '😊', icon: <Smile size={18} />, count: 0, reacted: false },
    { emoji: '👍', icon: <ThumbsUp size={18} />, count: 0, reacted: false },
    { emoji: '🎁', icon: <Gift size={18} />, count: 0, reacted: false },
    { emoji: '🤠', icon: <Rocket size={18} />, count: 0, reacted: false },
    { emoji: '💯', icon: <Award size={18} />, count: 0, reacted: false },
    { emoji: '🧢', icon: <Zap size={18} />, count: 0, reacted: false },
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
                className={`px-2 py-1 h-auto ${reaction.reacted ? 'bg-gray-100' : ''}`}
                onClick={() => toggleReaction(index)}
              >
                <span className="text-lg mr-1">{reaction.icon}</span>
                {reaction.count > 0 && <span className="text-xs">{reaction.count}</span>}
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