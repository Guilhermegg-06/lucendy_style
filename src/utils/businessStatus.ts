const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export function getBusinessStatus(now = new Date()) {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const isBusinessDay = day >= 1 && day <= 6;
  const isMorning = minutes >= 480 && minutes < 720;
  const isAfternoon = minutes >= 780 && minutes < 1260;
  const isOpen = isBusinessDay && (isMorning || isAfternoon);

  let nextOpeningText = "Abre segunda às 8h";
  if (isMorning) nextOpeningText = "Aberto até 12h";
  else if (isAfternoon) nextOpeningText = "Aberto até 21h";
  else if (isBusinessDay && minutes < 480) nextOpeningText = "Abre hoje às 8h";
  else if (isBusinessDay && minutes >= 720 && minutes < 780) nextOpeningText = "Retorna hoje às 13h";
  else if (day >= 1 && day <= 5 && minutes >= 1260) nextOpeningText = "Abre amanhã às 8h";

  return { isOpen, label: isOpen ? "Aberto agora" : "Fechado", nextOpeningText, currentDay: days[day] };
}