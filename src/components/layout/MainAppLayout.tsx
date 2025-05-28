import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is mandatory as a layout component must wrap content.
   */
  children: React.ReactNode;
  /**
   * Optional additional CSS class names to apply to the main layout container.
   */
  className?: string;
  /**
   * Optional title for the page. If provided, it will be set as the document's title.
   */
  title?: string;
}

/**
 * MainAppLayout is a top-level layout component responsible for the overall page structure.
 * For the Login Screen Interface project, it provides a full-screen flex container
 * that centers its children (e.g., the LoginPage content).
 * The background color of the page (the blue area) is typically set on the `body` element
 * via global CSS (e.g., src/index.css).
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  className,
  title,
}) => {
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <main
      className={cn(
        "flex justify-center items-center h-screen", // As per Project Requirements -> Layout Requirements -> overall.definition
                                                    // This creates a full-height flex container that centers its content.
                                                    // The `bg-background` is expected to be on the `body` tag via `src/index.css`.
        className // Allows consumers to pass additional Tailwind classes or custom styles.
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
