import { useEffect } from "react";

export const useTitle = (title) => {

useEffect(() => { 
    document.title = `${title} / Film Folio`;
});
  return null;
}
