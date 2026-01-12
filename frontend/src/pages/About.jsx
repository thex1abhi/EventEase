
const About = () => {
  return (
    <>
      

      <main className="container mx-auto px-4 m-12  ">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">About EventEase</h1>
          <p className="text-slate-600 mb-6">
            EventEase is a lightweight event management system that helps organizers create events, manage registrations, and communicate with attendees — all from one place.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="font-semibold mb-2">Easy Event Creation</h3>
            <p className="text-sm text-slate-700">Create and publish events quickly with an intuitive interface.</p> 
          </div>

          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="font-semibold mb-2">Registration Management</h3>
            <p className="text-sm text-slate-700">Track attendees, export lists, and manage check-ins effortlessly.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="font-semibold mb-2">Notifications & Updates</h3>
            <p className="text-sm text-slate-700">Send announcements and reminders to keep everyone informed.</p>
          </div>
        </section>

        <section className="mt-10 mb-4 text-center">
          <p className="text-sm text-slate-500">Built with ❤️ for organizers and attendees. Want more features? Open an issue or submit a PR on GitHub.</p>  
        </section>
      </main>

   
    </>
  );
};

export default About;
