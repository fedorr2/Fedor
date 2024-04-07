'use strict'

let btn_brush = document.getElementById("brush")
let btn_line = document.getElementById("line")
let btn_circle = document.getElementById("circle")
let btn_restange = document.getElementById("restange")
let canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let isDraw = false
let startX, startY

function set_tool(tool_name) {
    current_tool = tool_name
}

let current_tool = 'brush'

btn_brush.onclick = () => set_tool('brush')
btn_line.onclick = () => set_tool('line')
btn_circle.onclick = () => set_tool('circle')
btn_restange.onclick = () => set_tool('restange')

function StartDrawning (event) {
    isDraw = true
    startX = event.offsetX
    startY = event.offsetY
}

function draw (event) {
    if (!isDraw) return
    const x = event.offsetX
    const y = event.offsetY
    ctx.strokestyle = document.getElementById('colorPicker')
    ctx.lineWight = document.getElementById('lineWight')
    if (current_tool == 'brush') {
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(x, y)
        ctx.stroke()
        startX = x
        startY = y
    }
}

function endDrawning (event) {
    isDraw = false
}

canvas.addEventListener("mousedown", StartDrawning)
canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseup", endDrawning)
canvas.addEventListener("mouseout", endDrawning)