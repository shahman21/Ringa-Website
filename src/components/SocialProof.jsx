const items = [
  'Appointment Booking',
  'Out of Hours Cover',
  'WhatsApp Messages',
  'New Patient Enquiries',
  'Appointment Reminders',
  'Practice Information',
  'Message Taking',
  'NHS Registration',
  'Cancellation List',
  'Hygienist Bookings',
]

const Dot = () => (
  <span className="mx-4 text-[#3b82c4] text-xs opacity-60">·</span>
)

function Track() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-track">
      {doubled.map((b, i) => (
        <span key={i} className="inline-flex items-center whitespace-nowrap text-sm text-[#6b7280] font-medium">
          {b}
          <Dot />
        </span>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <div className="bg-[#f7f9fc] border-y border-[#e5e8ed] py-4 overflow-hidden">
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0 pl-6 pr-4 border-r border-[#e5e8ed]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3b82c4] animate-pulse" />
          <span className="text-[#6b7280] text-xs font-medium whitespace-nowrap">Built for UK dental practices</span>
        </div>
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f7f9fc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f7f9fc] to-transparent z-10 pointer-events-none" />
          <Track />
        </div>
      </div>
    </div>
  )
}
