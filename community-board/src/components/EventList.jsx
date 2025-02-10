import React from 'react';
import EventCard from './EventCard';
import './EventList.css';

const events = [
  { name: 'Community Cleanup', date: '2023-11-01', location: 'Central Park', description: 'Join us for a community cleanup event.', image: 'https://media.istockphoto.com/id/1321271168/photo/young-volunteers-walking-in-a-field-during-a-cleanup-day.jpg?s=2048x2048&w=is&k=20&c=XvouDB1iIujC1aVsXcVV1egrIFi7omD7Zc1Cb9a0P8g=' },
  { name: 'Farmers Market', date: '2023-11-02', location: 'Main Street', description: 'Fresh produce and local goods.', image: 'https://media.istockphoto.com/id/1193489879/photo/counter-with-fresh-vegetables-and-a-sign-of-local-products.jpg?s=2048x2048&w=is&k=20&c=S2ZrZqmzx8G4sgiic3ljJFhcblLey_Wf3LJ_4kSLUUE=' },
  { name: 'Charity Run', date: '2023-11-03', location: 'Riverfront', description: '5K run for charity.', image: 'https://media.istockphoto.com/id/503565231/photo/low-section-of-marathon-runners-competing-at-park.jpg?s=2048x2048&w=is&k=20&c=A30p0iQK6rvCv-2Nox5CmWsD1IolSnXz0keAbwB5LN0=' },
  { name: 'Art Exhibit', date: '2023-11-04', location: 'Art Gallery', description: 'Local artists showcase their work.', image: 'https://media.istockphoto.com/id/1603191573/photo/diverse-group-of-teenagers-looking-at-abstract-art-in-art-gallery.jpg?s=2048x2048&w=is&k=20&c=d_eciyqLFNUc5Q_WrJQS57Aco7zSte-9GdcDReLkh48=' },
  { name: 'Music Festival', date: '2023-11-05', location: 'music food truck', description: 'Live music and food trucks.', image: 'https://media.istockphoto.com/id/1285357911/photo/hipster-with-friends-in-front-of-modified-truck-for-mobile-fast-food-service.jpg?s=2048x2048&w=is&k=20&c=bfzbsNXUFpQTstWTJseq2Ixu26kr73JhZoh8eGAdW2c=' },
  { name: 'Book Club', date: '2023-11-06', location: 'Library', description: 'Monthly book discussion.', image: 'https://media.istockphoto.com/id/2162169941/photo/bookstore.jpg?s=2048x2048&w=is&k=20&c=WlJsEWpGcDRmLor7WI_UqBRRu4CNpbfLV4qKSaH_hdc=' },
  { name: 'Yoga Class', date: '2023-11-07', location: 'Community Center', description: 'Free yoga class for all levels.', image: 'https://media.istockphoto.com/id/2155398638/photo/japanese-woman-exercising-yoga-on-a-class-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=M8-vmq1QvD8Y5vVfcF9zYH13WRk6YRzKuhSYNbUcaEc=' },
  { name: 'Cooking Workshop', date: '2023-11-08', location: 'Culinary School', description: 'Learn to cook healthy meals.', image: 'https://media.istockphoto.com/id/2150750471/photo/happy-girl-baking-at-home-with-her-loving-parents.jpg?s=2048x2048&w=is&k=20&c=u_ZNci0vYjFPZuWn2FnGj0lgUi3wr2-MCgzjmcBzmpA=' },
  { name: 'Tech Meetup', date: '2023-11-09', location: 'Tech Hub', description: 'Networking event for tech enthusiasts.', image: 'https://media.istockphoto.com/id/2159341791/photo/multicultural-business-professionals-celebrating-success.jpg?s=2048x2048&w=is&k=20&c=VxhSPntK_wbjNHH5YLdJON6eAMzTeWAFAnMoYfKSJhs=' },
  { name: 'Pet Adoption Fair', date: '2023-11-10', location: 'Animal Shelter', description: 'Find your new furry friend.', image: 'https://media.istockphoto.com/id/2091556241/photo/close-up-of-female-volunteer-holds-on-hands-dog-in-shelter-shelter-for-animals-concept.jpg?s=2048x2048&w=is&k=20&c=S7RNVVHRGOFovDRHJVkyfGVZ51RShATJ1pdGuRhVdDk=' },
];

const EventList = () => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}

export default EventList;