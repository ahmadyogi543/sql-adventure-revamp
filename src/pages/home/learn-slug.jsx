import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import HomeLayout from "../../layouts/HomeLayout";
import GameplayMenuLayout from "../../layouts/GameplayMenuLayout";
import { Button } from "react-bootstrap";

const LearnSlugPage = () => {
  const { slug } = useParams();
  const [md, setMd] = useState("");

  const loadMarkdown = async (file) => {
    try {
      const response = await fetch(`/materi/${file}.md`);
      const text = await response.text();
      setMd(text);
    } catch (error) {
      console.error("Error loading markdown file:", error);
    }
  };

  useEffect(() => {
    loadMarkdown(slug);
  }, []);

  return (
    <GameplayMenuLayout title="BELAJAR">
      <div className="p-5">
        <Link to={"/learn"}>
          <Button className="mb-4">Kembali</Button>
        </Link>
        <ReactMarkdown
          children={md}
          className="bg-white p-5 rounded border"
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <footer className="flex-center text-primary py-3">
        <div className="d-flex align-items-center small">
          <span className="fw-bold me-2">SQL Adventure</span>
          <span className="opacity-75">© 2024 PDWM Pilkom</span>
        </div>
      </footer>
    </GameplayMenuLayout>
  );
};

export default LearnSlugPage;
