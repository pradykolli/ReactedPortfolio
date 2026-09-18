import React, { useState } from 'react';
import './ChatBot.css';

const initialMessage = {
	role: 'assistant',
	content: 'Hi, I am Pradeep\'s portfolio assistant. Ask me about his frontend experience, projects, or technical skills.'
};

const quickPrompts = [
	'What is Pradeep\'s experience?',
	'What technologies does he use?',
	'Tell me about his projects'
];

const fallbackReply = (question) => {
	const normalizedQuestion = question.toLowerCase();

	if (normalizedQuestion.includes('experience') || normalizedQuestion.includes('work')) {
		return 'Pradeep is a Senior Frontend Engineer with 8+ years of experience. He has built React and TypeScript applications for financial-services and wealth-management platforms, including custom data grids, portfolio visualizations, REST integrations, and CI/CD workflows.';
	}

	if (normalizedQuestion.includes('skill') || normalizedQuestion.includes('technolog')) {
		return 'His core technologies include React, JavaScript, TypeScript, Redux, Context API, HTML5, CSS3, SASS, Bootstrap, Jest, Enzyme, REST APIs, Axios, Node.js, Azure, Jenkins, Chart.js, and data grids. He is currently building hands-on experience with Next.js, TanStack Query, Playwright, and AI application patterns.';
	}

	if (normalizedQuestion.includes('project') || normalizedQuestion.includes('portfolio')) {
		return 'His current Portfolio Engineering Lab includes a production-style wealth-management dashboard using Next.js, React, TypeScript, TanStack Query, REST APIs, and accessible reusable components, plus an AI financial-assistant prototype exploring streaming responses and structured outputs.';
	}

	if (normalizedQuestion.includes('contact') || normalizedQuestion.includes('hire') || normalizedQuestion.includes('email')) {
		return 'You can reach Pradeep at pradykolli@gmail.com or use the Contact Me page to prepare an email with your message.';
	}

	return 'I can answer questions about Pradeep\'s experience, skills, projects, or how to contact him. Try one of the suggested questions below.';
};

function ChatBot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([initialMessage]);
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const askAssistant = async (question) => {
		const trimmedQuestion = question.trim();
		if (!trimmedQuestion || isLoading) return;

		const userMessage = { role: 'user', content: trimmedQuestion };
		const conversation = [...messages, userMessage];
		setMessages(conversation);
		setInput('');
		setIsLoading(true);

		try {
			const apiUrl = process.env.REACT_APP_AI_API_URL;
			if (!apiUrl) {
				setMessages([...conversation, { role: 'assistant', content: fallbackReply(trimmedQuestion) }]);
				return;
			}

			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					messages: conversation,
					context: 'You are Pradeep Kolli portfolio assistant. Answer briefly and accurately using only the portfolio context provided by the configured AI service.'
				})
			});

			if (!response.ok) throw new Error('AI request failed');
			const data = await response.json();
			const answer = data.message || data.content || data.choices?.[0]?.message?.content;
			if (!answer) throw new Error('AI response was empty');
			setMessages([...conversation, { role: 'assistant', content: answer }]);
		} catch (error) {
			setMessages([...conversation, { role: 'assistant', content: 'The AI service is unavailable right now. ' + fallbackReply(trimmedQuestion) }]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		askAssistant(input);
	};

	return (
		<div className="chatbot">
			{isOpen && (
				<section className="chatbotPanel" aria-label="Portfolio AI assistant">
					<header className="chatbotHeader">
						<div>
							<span className="chatbotStatus" aria-hidden="true"></span>
							<strong>Portfolio assistant</strong>
							<small>Ask about Pradeep</small>
						</div>
						<button type="button" className="chatbotClose" onClick={() => setIsOpen(false)} aria-label="Close assistant">×</button>
					</header>
					<div className="chatbotMessages" aria-live="polite">
						{messages.map((message, index) => (
							<div className={`chatbotMessage ${message.role}`} key={`${message.role}-${index}`}>
								{message.content}
							</div>
						))}
						{isLoading && <div className="chatbotMessage assistant chatbotTyping">Thinking...</div>}
					</div>
					<div className="chatbotPrompts">
						{quickPrompts.map((prompt) => (
							<button type="button" key={prompt} onClick={() => askAssistant(prompt)} disabled={isLoading}>{prompt}</button>
						))}
					</div>
					<form className="chatbotForm" onSubmit={handleSubmit}>
						<label className="sr-only" htmlFor="chatbotInput">Ask the portfolio assistant</label>
						<input id="chatbotInput" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question..." autoComplete="off" />
						<button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message">➤</button>
					</form>
				</section>
			)}
			<button type="button" className="chatbotLauncher" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}>
				<span aria-hidden="true">{isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-1x fa-robot"></i>}</span>
			</button>
		</div>
	);
}

export default ChatBot;
