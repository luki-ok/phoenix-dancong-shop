"use client";

import { useState } from "react";

export default function AiAssistantSection() {
  const [prompt, setPrompt] = useState("我喜欢清爽花香，想要回甘明显的单枞推荐。");
  const [aiText, setAiText] = useState("");
  const [aiError, setAiError] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const handleGenerate = async () => {
    setAiLoading(true);
    setAiError("");
    setAiText("");
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = (await response.json()) as { text?: string; error?: string };
      if (!response.ok) {
        throw new Error(data.error || "Gemini request failed");
      }
      setAiText(data.text || "未获取到推荐内容，请稍后再试。");
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "请求失败");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section className="tea-card rounded-3xl p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-700">
            风味助手
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold text-[#2b231b]">
            用 Gemini 生成今日推荐
          </h3>
          <p className="mt-2 text-sm text-[#5c4b3a]">
            输入你想要的香气与口感，我们会给出一段参考建议。
          </p>
        </div>
        <button
          type="button"
          onClick={handleGenerate}
          disabled={aiLoading}
          className="rounded-full bg-[#2f4a3c] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {aiLoading ? "生成中..." : "生成推荐"}
        </button>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          className="min-h-[160px] w-full rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-[#2b231b] focus:outline-none"
        />
        <div className="rounded-2xl border border-dashed border-amber-200 bg-[#fff7e6] p-4 text-sm text-[#5c4b3a]">
          {aiError ? (
            <p className="text-amber-800">{aiError}</p>
          ) : aiText ? (
            <p className="whitespace-pre-line">{aiText}</p>
          ) : (
            <p>等待生成内容...</p>
          )}
        </div>
      </div>
    </section>
  );
}
