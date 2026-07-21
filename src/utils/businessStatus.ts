const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
export function getBusinessStatus(now = new Date()) {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const isBusinessDay = day >= 2 && day <= 6;
  const isOpen = isBusinessDay && minutes >= 540 && minutes < 1200;
  let nextOpeningText = "Abre terça às 9h";
  if (isBusinessDay && minutes < 540) nextOpeningText = "Abre hoje às 9h";
  else if (day >= 2 && day <= 5 && minutes >= 1200) nextOpeningText = "Abre amanhã às 9h";
  else if (day === 1) nextOpeningText = "Abre amanhã às 9h";
  return { isOpen, label: isOpen ? "Aberto agora" : "Fechado", nextOpeningText, currentDay: days[day] };
}
