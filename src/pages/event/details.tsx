import { motion } from "framer-motion";
export function Details() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			transition={{ duration: 0.9 }}
			className="max-w-2xl mx-6 md:mx-auto p-6 bg-white shadow-lg rounded-2xl text-slate-900 mb-6"
		>
			<h1 className="text-2xl font-bold text-center text-slate-800 mb-4">
				Jovem Advocacia, sejam todos bem-vindos!
			</h1>
			<p className="text-lg text-center mb-6">
				Este é o seu link para garantir sua vaga na mentoria prática que vai
				transformar sua carreira!
			</p>

			<h2 className="text-xl font-semibold text-slate-700 mb-3">
				Por que participar?
			</h2>
			<p className="mb-4">
				A mentoria ajudará você a ter mais segurança no dia a dia da advocacia,
				além de potencializar seu crescimento profissional e aumentar suas
				chances de fechar contratos.
			</p>

			<h2 className="text-xl font-semibold text-slate-700 mb-3">
				Quais são as áreas disponíveis?
			</h2>
			<ul className="mb-4 list-disc list-inside space-y-2">
				<li>Direito Criminal</li>
				<li>Direito Previdenciário</li>
				<li>Direito de Família</li>
				<li>Direito do Consumidor e Bancário</li>
				<li>Direito do Trabalho</li>
			</ul>

			<h2 className="text-xl font-semibold text-slate-700 mb-3">
				Dias da Semana
			</h2>
			<ul className="mb-4 space-y-2">
				<li>
					<strong>Terça-feira:</strong> Direito Criminal e Direito
					Previdenciário
				</li>
				<li>
					<strong>Quarta-feira:</strong> Direito de Família
				</li>
				<li>
					<strong>Quinta-feira:</strong> Direito do Consumidor e Bancário e
					Direito do Trabalho
				</li>
			</ul>
			<p className="italic text-slate-600 mb-6">
				Módulos extras serão disponibilizados para todos os participantes!
			</p>

			<h2 className="text-xl font-semibold text-slate-700 mb-3">
				Formato e duração
			</h2>
			<ul className="mb-4 space-y-2">
				<li>
					<strong>Período:</strong> 08 de abril a 10 de junho
				</li>
				<li>
					<strong>Horário:</strong> 19h - 21h
				</li>
				<li>
					<strong>Plataforma:</strong> Aulas ao vivo no Google Classroom +
					atividades e modelos práticos
				</li>
				<li>
					<strong>Networking exclusivo:</strong> Grupo fechado para troca de
					informações e dúvidas
				</li>
			</ul>

			<h2 className="text-xl font-semibold text-slate-700 mb-3">
				Quantas mentorias posso escolher?
			</h2>
			<p className="mb-4 text-lg font-bold text-center bg-yellow-100 p-3 rounded-lg">
				Você pode escolher apenas <span className="underline">uma!</span> O
				objetivo é que cada participante opte pela mentoria mais alinhada à sua
				área de atuação, permitindo que mais jovens tenham a oportunidade de
				participar e se beneficiar do projeto.
			</p>

			<div className="bg-slate-100 p-4 rounded-lg text-center mb-6">
				<h3 className="text-lg font-semibold text-slate-800">
					Oferta especial de lançamento!
				</h3>
				<p className="text-slate-700">
					Valor real: <span className="line-through">R$ 199,00</span>
				</p>
				<p className="text-xl font-bold text-red-600">
					Promoção exclusiva no dia 26/03: Apenas R$ 47,00 por mentoria
				</p>
			</div>

			<p className="text-center font-semibold text-red-500">
				Serão vagas limitadas. Então, garanta já a sua!
			</p>
		</motion.div>
	);
}
