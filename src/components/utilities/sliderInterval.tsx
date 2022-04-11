const sliderInterval = (count: number, slider: any) => {
    setInterval(() => {
        if (count >= 300) {
            count = 0

            slider.style.marginLeft = `-${count}%`
        } else {
            if (slider === null) {
                return
            } else {
                slider.style.marginLeft = `-${count}%`
            }
        }
        count = 100 + count
    }, 3000)
}

export default sliderInterval;