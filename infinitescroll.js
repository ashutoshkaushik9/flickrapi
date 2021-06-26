import { useState, useEffect } from "react";
import { max_images, image_increment } from "./index";

import { debounce } from '../utils/debounce';

export const infiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(image_increment);

  var pagecurr=1;

  const handleScroll = debounce(() => {
    if (
      window.scrollHeight + document.scrollTop !==
        document.outerHeight() 
    ) 
    
    pagecurr++
    this.Ihjer();

    setLoading(true);
  }, 1000);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};