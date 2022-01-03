export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-6c8f0-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const transformedData = [];

  for (const key in data) {
    transformedData.push({
      id: key,
      ...data[key],
    });
  }

  return transformedData;
}

export async function getFeaturedEvents() {
  const data = await getAllEvents();
  return data.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const data = await getAllEvents();
  return data.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const data = await getAllEvents();

  const { year, month } = dateFilter;

  let filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
