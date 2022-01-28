import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 100,
    breakpoints: {
        1356: {
            gap: 20
        },
        900: {
            perView: 2,
            gap: 20
        },
        650: {
            perView: 1
        }
    }
}).mount()


