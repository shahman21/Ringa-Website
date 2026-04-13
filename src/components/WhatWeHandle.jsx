import { useFadeIn } from '../hooks/useFadeIn'

const categories = [
  {
    icon: '📅',
    title: 'Appointments',
    items: [
      'Book new appointment',
      'Reschedule',
      'Cancel',
      'Confirm',
      'Hygienist bookings',
      'Cancellation list',
    ],
  },
  {
    icon: '🌙',
    title: 'Out of Hours Cover',
    items: [
      'Answers every call after 5pm and on weekends',
      'Takes patient name and number',
      'Forwards a WhatsApp alert to your team',
      'No patient goes to voicemail',
    ],
  },
  {
    icon: 'ℹ️',
    title: 'Practice Information',
    items: [
      'Opening hours',
      'Location and parking',
      'NHS availability',
      'Services the practice offers',
      'How to register as a new patient',
    ],
  },
  {
    icon: '✉️',
    title: 'Message Taking',
    items: [
      'Pain, treatment questions, clinical concerns',
      'Takes patient name and number',
      'Sends immediate WhatsApp to your team',
      'Your team calls the patient back',
    ],
  },
]

export default function WhatWeHandle() {
  const headRef = useFadeIn()
  const gridRef = useFadeIn(0.1, 100)
  const calloutRef = useFadeIn(0.1, 50)

  return (
    <section id="what-we-handle" className="section-pad bg-[#f7f9fc]">
      <div className="container-wide">
        <div ref={headRef} className="fade-up mb-14">
          <p className="text-[#3b82c4] text-xs font-semibold uppercase tracking-widest mb-3">What We Handle</p>
          <h2 className="font-heading font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[#1f2937] mb-4">
            Every patient question answered.{' '}
            <span className="text-[#3b82c4]">Day or night.</span>
          </h2>
          <p className="text-[#6b7280] text-base max-w-xl">
            Ringa works alongside your team, trained on dental practice workflows. No call goes unanswered. No patient has to try elsewhere.
          </p>
        </div>

        <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {categories.map((cat) => (
            <div key={cat.title} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-heading font-bold text-lg text-[#1f2937]">{cat.title}</h3>
              </div>
              <ul className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#6b7280]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b82c4] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div ref={calloutRef} className="fade-up">
          <div className="rounded-card bg-[#3b82c4] p-6 md:p-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-white text-base leading-relaxed">
              <strong>For anything clinical, Ringa takes a message.</strong> Pain, symptoms, treatment questions, aftercare: Ringa collects the patient's name and number and your team calls them back. It never gives clinical advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
