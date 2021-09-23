window.addEventListener("keydown", function (event) {
  if (event.which == 13) {
    document.getElementById("key-enter").classList.toggle('color2');
    document.getElementById("key-numenter1").classList.toggle('color2');
    document.getElementById("key-numenter2").classList.toggle('color2');
    document.getElementById("key-numenter3").classList.toggle('color2');
    document.getElementById("key-numenter4").classList.toggle('color2');
  } else if (event.which == 107) {
    document.getElementById("key-numadd1").classList.toggle('color2');
    document.getElementById("key-numadd2").classList.toggle('color2');
    document.getElementById("key-numadd3").classList.toggle('color2');
    document.getElementById("key-numadd4").classList.toggle('color2');
  } else if (event.which == 27) {
    document.getElementById("key-esc").classList.toggle('color2');
  } else if (event.which == 37) {
    document.getElementById("key-arrowleft").classList.toggle('color2');
  } else if (event.which == 38) {
    document.getElementById("key-arrowup").classList.toggle('color2');
  } else if (event.which == 39) {
    document.getElementById("key-arrowright").classList.toggle('color2');
  } else if (event.which == 40) {
    document.getElementById("key-arrowdown").classList.toggle('color2');
  } else if (event.which == 112) {
    document.getElementById("key-f1").classList.toggle('color2');
  } else if (event.which == 113) {
    document.getElementById("key-f2").classList.toggle('color2');
  } else if (event.which == 114) {
    document.getElementById("key-f3").classList.toggle('color2');
  } else if (event.which == 115) {
    document.getElementById("key-f4").classList.toggle('color2');
  } else if (event.which == 116) {
    document.getElementById("key-f5").classList.toggle('color2');
  } else if (event.which == 117) {
    document.getElementById("key-f6").classList.toggle('color2');
  } else if (event.which == 118) {
    document.getElementById("key-f7").classList.toggle('color2');
  } else if (event.which == 119) {
    document.getElementById("key-f8").classList.toggle('color2');
  } else if (event.which == 120) {
    document.getElementById("key-f9").classList.toggle('color2');
  } else if (event.which == 121) {
    document.getElementById("key-f10").classList.toggle('color2');
  } else if (event.which == 122) {
    document.getElementById("key-f11").classList.toggle('color2');
  } else if (event.which == 123) {
    document.getElementById("key-f12").classList.toggle('color2');
  } else if (event.which == 46) {
    document.getElementById("key-del").classList.toggle('color2');
  } else if (event.which == 36) {
    document.getElementById("key-home").classList.toggle('color2');
  } else if (event.which == 35) {
    document.getElementById("key-end").classList.toggle('color2');
  } else if (event.which == 33) {
    document.getElementById("key-pageup").classList.toggle('color2');
  } else if (event.which == 34) {
    document.getElementById("key-pagedown").classList.toggle('color2');
  } else if (event.which == 192) {
    document.getElementById("key-backquote").classList.toggle('color2');
  } else if (event.which == 48) {
    document.getElementById("key-0").classList.toggle('color2');
  } else if (event.which == 49) {
    document.getElementById("key-1").classList.toggle('color2');
  } else if (event.which == 50) {
    document.getElementById("key-2").classList.toggle('color2');
  } else if (event.which == 51) {
    document.getElementById("key-3").classList.toggle('color2');
  } else if (event.which == 52) {
    document.getElementById("key-4").classList.toggle('color2');
  } else if (event.which == 53) {
    document.getElementById("key-5").classList.toggle('color2');
  } else if (event.which == 54) {
    document.getElementById("key-6").classList.toggle('color2');
  } else if (event.which == 55) {
    document.getElementById("key-7").classList.toggle('color2');
  } else if (event.which == 56) {
    document.getElementById("key-8").classList.toggle('color2');
  } else if (event.which == 57) {
    document.getElementById("key-9").classList.toggle('color2');
  } else if (event.which == 189 || event.which == 173) {
    document.getElementById("key-minus").classList.toggle('color2');
  } else if (event.which == 187 || event.which == 61) {
    document.getElementById("key-equal").classList.toggle('color2');
  } else if (event.which == 8) {
    document.getElementById("key-backspace").classList.toggle('color2');
  } else if (event.which == 144) {
    document.getElementById("key-numlock").classList.toggle('color2');
  } else if (event.which == 111) {
    document.getElementById("key-numslash").classList.toggle('color2');
  } else if (event.which == 106) {
    document.getElementById("key-nummultiply").classList.toggle('color2');
  } else if (event.which == 109) {
    document.getElementById("key-numsubstract").classList.toggle('color2');
  } else if (event.which == 110) {
    document.getElementById("key-numdecimal").classList.toggle('color2');
  } else if (event.which == 96) {
    document.getElementById("key-num0").classList.toggle('color2');
  } else if (event.which == 97) {
    document.getElementById("key-num1").classList.toggle('color2');
  } else if (event.which == 98) {
    document.getElementById("key-num2").classList.toggle('color2');
  } else if (event.which == 99) {
    document.getElementById("key-num3").classList.toggle('color2');
  } else if (event.which == 100) {
    document.getElementById("key-num4").classList.toggle('color2');
  } else if (event.which == 101) {
    document.getElementById("key-num5").classList.toggle('color2');
  } else if (event.which == 102) {
    document.getElementById("key-num6").classList.toggle('color2');
  } else if (event.which == 103) {
    document.getElementById("key-num7").classList.toggle('color2');
  } else if (event.which == 104) {
    document.getElementById("key-num8").classList.toggle('color2');
  } else if (event.which == 105) {
    document.getElementById("key-num9").classList.toggle('color2');
  } else if (event.which == 9) {
    document.getElementById("key-tab").classList.toggle('color2');
  } else if (event.which == 219) {
    document.getElementById("key-openbracket").classList.toggle('color2');
  } else if (event.which == 221) {
    document.getElementById("key-closebracket").classList.toggle('color2');
  } else if (event.which == 220) {
    document.getElementById("key-backslash").classList.toggle('color2');
  } else if (event.which == 20) {
    document.getElementById("key-capslock").classList.toggle('color2');
  } else if (event.which == 186 || event.which == 59) {
    document.getElementById("key-semicolon").classList.toggle('color2');
  } else if (event.which == 222) {
    document.getElementById("key-quote").classList.toggle('color2');
  } else if (event.code == 'ShiftLeft') {
    document.getElementById("key-leftshift").classList.toggle('color2');
  } else if (event.code == 'ShiftRight') {
    document.getElementById("key-rightshift").classList.toggle('color2');
  } else if (event.code == 'ControlLeft') {
    document.getElementById("key-leftcontrol").classList.toggle('color2');
  } else if (event.which == 91) {
    document.getElementById("key-windows").classList.toggle('color2');
  } else if (event.code == 'AltLeft') {
    document.getElementById("key-leftalt").classList.toggle('color2');
  } else if (event.code == 'AltRight') {
    document.getElementById("key-rightalt").classList.toggle('color2');
  } else if (event.code == 'ControlRight') {
    document.getElementById("key-rightcontrol").classList.toggle('color2');
  } else if (event.which == 65) {
    document.getElementById("key-a").classList.toggle('color2');
  } else if (event.which == 66) {
    document.getElementById("key-b").classList.toggle('color2');
  } else if (event.which == 67) {
    document.getElementById("key-c").classList.toggle('color2');
  } else if (event.which == 68) {
    document.getElementById("key-d").classList.toggle('color2');
  } else if (event.which == 69) {
    document.getElementById("key-e").classList.toggle('color2');
  } else if (event.which == 70) {
    document.getElementById("key-f").classList.toggle('color2');
  } else if (event.which == 71) {
    document.getElementById("key-g").classList.toggle('color2');
  } else if (event.which == 72) {
    document.getElementById("key-h").classList.toggle('color2');
  } else if (event.which == 73) {
    document.getElementById("key-i").classList.toggle('color2');
  } else if (event.which == 74) {
    document.getElementById("key-j").classList.toggle('color2');
  } else if (event.which == 75) {
    document.getElementById("key-k").classList.toggle('color2');
  } else if (event.which == 76) {
    document.getElementById("key-l").classList.toggle('color2');
  } else if (event.which == 77) {
    document.getElementById("key-m").classList.toggle('color2');
  } else if (event.which == 78) {
    document.getElementById("key-n").classList.toggle('color2');
  } else if (event.which == 79) {
    document.getElementById("key-o").classList.toggle('color2');
  } else if (event.which == 80) {
    document.getElementById("key-p").classList.toggle('color2');
  } else if (event.which == 81) {
    document.getElementById("key-q").classList.toggle('color2');
  } else if (event.which == 82) {
    document.getElementById("key-r").classList.toggle('color2');
  } else if (event.which == 83) {
    document.getElementById("key-s").classList.toggle('color2');
  } else if (event.which == 84) {
    document.getElementById("key-t").classList.toggle('color2');
  } else if (event.which == 85) {
    document.getElementById("key-u").classList.toggle('color2');
  } else if (event.which == 86) {
    document.getElementById("key-v").classList.toggle('color2');
  } else if (event.which == 87) {
    document.getElementById("key-w").classList.toggle('color2');
  } else if (event.which == 88) {
    document.getElementById("key-x").classList.toggle('color2');
  } else if (event.which == 89) {
    document.getElementById("key-y").classList.toggle('color2');
  } else if (event.which == 90) {
    document.getElementById("key-z").classList.toggle('color2');
  } else if (event.which == 188) {
    document.getElementById("key-comma").classList.toggle('color2');
  } else if (event.which == 32) {
    document.getElementById("key-space").classList.toggle('color2');
  }
});

window.addEventListener("keyup", function (event) {
  if (event.which == 13) {
    document.getElementById("key-enter").classList.toggle('color2');
    document.getElementById("key-numenter1").classList.toggle('color2');
    document.getElementById("key-numenter2").classList.toggle('color2');
    document.getElementById("key-numenter3").classList.toggle('color2');
    document.getElementById("key-numenter4").classList.toggle('color2');
  } else if (event.which == 107) {
    document.getElementById("key-numadd1").classList.toggle('color2');
    document.getElementById("key-numadd2").classList.toggle('color2');
    document.getElementById("key-numadd3").classList.toggle('color2');
    document.getElementById("key-numadd4").classList.toggle('color2');
  } else if (event.which == 27) {
    document.getElementById("key-esc").classList.toggle('color2');
  } else if (event.which == 37) {
    document.getElementById("key-arrowleft").classList.toggle('color2');
  } else if (event.which == 38) {
    document.getElementById("key-arrowup").classList.toggle('color2');
  } else if (event.which == 39) {
    document.getElementById("key-arrowright").classList.toggle('color2');
  } else if (event.which == 40) {
    document.getElementById("key-arrowdown").classList.toggle('color2');
  } else if (event.which == 112) {
    document.getElementById("key-f1").classList.toggle('color2');
  } else if (event.which == 113) {
    document.getElementById("key-f2").classList.toggle('color2');
  } else if (event.which == 114) {
    document.getElementById("key-f3").classList.toggle('color2');
  } else if (event.which == 115) {
    document.getElementById("key-f4").classList.toggle('color2');
  } else if (event.which == 116) {
    document.getElementById("key-f5").classList.toggle('color2');
  } else if (event.which == 117) {
    document.getElementById("key-f6").classList.toggle('color2');
  } else if (event.which == 118) {
    document.getElementById("key-f7").classList.toggle('color2');
  } else if (event.which == 119) {
    document.getElementById("key-f8").classList.toggle('color2');
  } else if (event.which == 120) {
    document.getElementById("key-f9").classList.toggle('color2');
  } else if (event.which == 121) {
    document.getElementById("key-f10").classList.toggle('color2');
  } else if (event.which == 122) {
    document.getElementById("key-f11").classList.toggle('color2');
  } else if (event.which == 123) {
    document.getElementById("key-f12").classList.toggle('color2');
  } else if (event.which == 46) {
    document.getElementById("key-del").classList.toggle('color2');
  } else if (event.which == 36) {
    document.getElementById("key-home").classList.toggle('color2');
  } else if (event.which == 35) {
    document.getElementById("key-end").classList.toggle('color2');
  } else if (event.which == 33) {
    document.getElementById("key-pageup").classList.toggle('color2');
  } else if (event.which == 34) {
    document.getElementById("key-pagedown").classList.toggle('color2');
  } else if (event.which == 192) {
    document.getElementById("key-backquote").classList.toggle('color2');
  } else if (event.which == 48) {
    document.getElementById("key-0").classList.toggle('color2');
  } else if (event.which == 49) {
    document.getElementById("key-1").classList.toggle('color2');
  } else if (event.which == 50) {
    document.getElementById("key-2").classList.toggle('color2');
  } else if (event.which == 51) {
    document.getElementById("key-3").classList.toggle('color2');
  } else if (event.which == 52) {
    document.getElementById("key-4").classList.toggle('color2');
  } else if (event.which == 53) {
    document.getElementById("key-5").classList.toggle('color2');
  } else if (event.which == 54) {
    document.getElementById("key-6").classList.toggle('color2');
  } else if (event.which == 55) {
    document.getElementById("key-7").classList.toggle('color2');
  } else if (event.which == 56) {
    document.getElementById("key-8").classList.toggle('color2');
  } else if (event.which == 57) {
    document.getElementById("key-9").classList.toggle('color2');
  } else if (event.which == 189 || event.which == 173) {
    document.getElementById("key-minus").classList.toggle('color2');
  } else if (event.which == 187 || event.which == 61) {
    document.getElementById("key-equal").classList.toggle('color2');
  } else if (event.which == 8) {
    document.getElementById("key-backspace").classList.toggle('color2');
  } else if (event.which == 144) {
    document.getElementById("key-numlock").classList.toggle('color2');
  } else if (event.which == 111) {
    document.getElementById("key-numslash").classList.toggle('color2');
  } else if (event.which == 106) {
    document.getElementById("key-nummultiply").classList.toggle('color2');
  } else if (event.which == 109) {
    document.getElementById("key-numsubstract").classList.toggle('color2');
  } else if (event.which == 110) {
    document.getElementById("key-numdecimal").classList.toggle('color2');
  } else if (event.which == 96) {
    document.getElementById("key-num0").classList.toggle('color2');
  } else if (event.which == 97) {
    document.getElementById("key-num1").classList.toggle('color2');
  } else if (event.which == 98) {
    document.getElementById("key-num2").classList.toggle('color2');
  } else if (event.which == 99) {
    document.getElementById("key-num3").classList.toggle('color2');
  } else if (event.which == 100) {
    document.getElementById("key-num4").classList.toggle('color2');
  } else if (event.which == 101) {
    document.getElementById("key-num5").classList.toggle('color2');
  } else if (event.which == 102) {
    document.getElementById("key-num6").classList.toggle('color2');
  } else if (event.which == 103) {
    document.getElementById("key-num7").classList.toggle('color2');
  } else if (event.which == 104) {
    document.getElementById("key-num8").classList.toggle('color2');
  } else if (event.which == 105) {
    document.getElementById("key-num9").classList.toggle('color2');
  } else if (event.which == 9) {
    document.getElementById("key-tab").classList.toggle('color2');
  } else if (event.which == 219) {
    document.getElementById("key-openbracket").classList.toggle('color2');
  } else if (event.which == 221) {
    document.getElementById("key-closebracket").classList.toggle('color2');
  } else if (event.which == 220) {
    document.getElementById("key-backslash").classList.toggle('color2');
  } else if (event.which == 20) {
    document.getElementById("key-capslock").classList.toggle('color2');
  } else if (event.which == 186 || event.which == 59) {
    document.getElementById("key-semicolon").classList.toggle('color2');
  } else if (event.which == 222) {
    document.getElementById("key-quote").classList.toggle('color2');
  } else if (event.code == 'ShiftLeft') {
    document.getElementById("key-leftshift").classList.toggle('color2');
  } else if (event.code == 'ShiftRight') {
    document.getElementById("key-rightshift").classList.toggle('color2');
  } else if (event.code == 'ControlLeft') {
    document.getElementById("key-leftcontrol").classList.toggle('color2');
  } else if (event.which == 91) {
    document.getElementById("key-windows").classList.toggle('color2');
  } else if (event.code == 'AltLeft') {
    document.getElementById("key-leftalt").classList.toggle('color2');
  } else if (event.code == 'AltRight') {
    document.getElementById("key-rightalt").classList.toggle('color2');
  } else if (event.code == 'ControlRight') {
    document.getElementById("key-rightcontrol").classList.toggle('color2');
  } else if (event.which == 65) {
    document.getElementById("key-a").classList.toggle('color2');
  } else if (event.which == 66) {
    document.getElementById("key-b").classList.toggle('color2');
  } else if (event.which == 67) {
    document.getElementById("key-c").classList.toggle('color2');
  } else if (event.which == 68) {
    document.getElementById("key-d").classList.toggle('color2');
  } else if (event.which == 69) {
    document.getElementById("key-e").classList.toggle('color2');
  } else if (event.which == 70) {
    document.getElementById("key-f").classList.toggle('color2');
  } else if (event.which == 71) {
    document.getElementById("key-g").classList.toggle('color2');
  } else if (event.which == 72) {
    document.getElementById("key-h").classList.toggle('color2');
  } else if (event.which == 73) {
    document.getElementById("key-i").classList.toggle('color2');
  } else if (event.which == 74) {
    document.getElementById("key-j").classList.toggle('color2');
  } else if (event.which == 75) {
    document.getElementById("key-k").classList.toggle('color2');
  } else if (event.which == 76) {
    document.getElementById("key-l").classList.toggle('color2');
  } else if (event.which == 77) {
    document.getElementById("key-m").classList.toggle('color2');
  } else if (event.which == 78) {
    document.getElementById("key-n").classList.toggle('color2');
  } else if (event.which == 79) {
    document.getElementById("key-o").classList.toggle('color2');
  } else if (event.which == 80) {
    document.getElementById("key-p").classList.toggle('color2');
  } else if (event.which == 81) {
    document.getElementById("key-q").classList.toggle('color2');
  } else if (event.which == 82) {
    document.getElementById("key-r").classList.toggle('color2');
  } else if (event.which == 83) {
    document.getElementById("key-s").classList.toggle('color2');
  } else if (event.which == 84) {
    document.getElementById("key-t").classList.toggle('color2');
  } else if (event.which == 85) {
    document.getElementById("key-u").classList.toggle('color2');
  } else if (event.which == 86) {
    document.getElementById("key-v").classList.toggle('color2');
  } else if (event.which == 87) {
    document.getElementById("key-w").classList.toggle('color2');
  } else if (event.which == 88) {
    document.getElementById("key-x").classList.toggle('color2');
  } else if (event.which == 89) {
    document.getElementById("key-y").classList.toggle('color2');
  } else if (event.which == 90) {
    document.getElementById("key-z").classList.toggle('color2');
  } else if (event.which == 188) {
    document.getElementById("key-comma").classList.toggle('color2');
  } else if (event.which == 32) {
    document.getElementById("key-space").classList.toggle('color2');
  }
});