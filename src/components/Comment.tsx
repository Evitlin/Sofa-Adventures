
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommentReactions from './CommentReactions';

interface CommentProps {
  id: string;
  author: string;
  content: string;
  date: string;
}

const Comment: React.FC<CommentProps> = ({ id, author, content, date }) => {
  // Function to generate a random avatar for comments
  const getRandomAvatar = () => {
    const styles = ['adventurer', 'adventurer-neutral', 'bottts', 'fun-emoji', 'lorelei', 'micah'];
    const selectedStyle = styles[Math.floor(Math.random() * styles.length)];
    return `https://api.dicebear.com/7.x/${selectedStyle}/svg?seed=${author}`;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm mb-4">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={getRandomAvatar()} alt={author} />
          <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sofa-purple">{author}</h4>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          
          <p className="mt-1 text-gray-700">{content}</p>
          
          <CommentReactions commentId={id} />
        </div>
      </div>
    </div>
  );
};

export default Comment;