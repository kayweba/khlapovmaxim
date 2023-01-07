window.onload = () => {

    const disk = document.querySelector('.disk')
    const animaionClassName = 'disk_animatied'

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                disk.classList.toggle(animaionClassName)
            }
        });
    }

    const observer = new IntersectionObserver(callback)
    const options = {
        rootMargin: '0px',
        threshold: 1
    }
    observer.observe(disk, options)
}
