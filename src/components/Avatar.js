import React from "react"

function Avatar() {
  return (
    <div className="flex justify-center items-center sm:justify-start sm:items-start mt-10 flex-col sm:flex-row">
      <img
        className="rounded-full"
        style={{ width: 150, height: 150 }}
        src="https://images.unsplash.com/photo-1576915172306-b22bb6aae18d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500"
        alt=""
      />

      <div className="">
        <div className="sm:ml-5">
          <div className="font-bold text-2xl p-0">Ibnu Musyaffa</div>
          <p className="leading-tight">
            Hi! My name is Ibnu and I am a Full-stack JavaScript engineer,
            rock-n-roll musician and medical doctor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Avatar
