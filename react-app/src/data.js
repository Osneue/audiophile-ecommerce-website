import XX59 from 'src/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import XX99_1 from 'src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import XX99_2 from 'src/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import YX1 from 'src/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import ZX7 from 'src/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import ZX9 from 'src/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'

import XX99_2_GALLERY_1 from 'src/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import XX99_2_GALLERY_2 from 'src/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import XX99_2_GALLERY_3 from 'src/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'

import XX99_1_GALLERY_1 from 'src/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
import XX99_1_GALLERY_2 from 'src/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
import XX99_1_GALLERY_3 from 'src/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'

import XX59_GALLERY_1 from 'src/assets/product-xx59-headphones/mobile/image-gallery-1.jpg'
import XX59_GALLERY_2 from 'src/assets/product-xx59-headphones/mobile/image-gallery-2.jpg'
import XX59_GALLERY_3 from 'src/assets/product-xx59-headphones/mobile/image-gallery-3.jpg'

import ZX9_GALLERY_1 from 'src/assets/product-zx9-speaker/mobile/image-gallery-1.jpg'
import ZX9_GALLERY_2 from 'src/assets/product-zx9-speaker/mobile/image-gallery-2.jpg'
import ZX9_GALLERY_3 from 'src/assets/product-zx9-speaker/mobile/image-gallery-3.jpg'

import ZX7_GALLERY_1 from 'src/assets/product-zx7-speaker/mobile/image-gallery-1.jpg'
import ZX7_GALLERY_2 from 'src/assets/product-zx7-speaker/mobile/image-gallery-2.jpg'
import ZX7_GALLERY_3 from 'src/assets/product-zx7-speaker/mobile/image-gallery-3.jpg'

import YX1_GALLERY_1 from 'src/assets/product-yx1-earphones/mobile/image-gallery-1.jpg'
import YX1_GALLERY_2 from 'src/assets/product-yx1-earphones/mobile/image-gallery-2.jpg'
import YX1_GALLERY_3 from 'src/assets/product-yx1-earphones/mobile/image-gallery-3.jpg'

import XX59_ALSO_LIKE from 'src/assets/figma/alsoLike/mobile/xx59.png'
import XX99_MARK1_ALSO_LIKE from 'src/assets/figma/alsoLike/mobile/xx99_mark1.png'
import XX99_MARK2_ALSO_LIKE from 'src/assets/figma/alsoLike/mobile/xx99_mark2.png'
import ZX7_ALSO_LIKE from 'src/assets/figma/alsoLike/mobile/zx7.png'
import ZX9_ALSO_LIKE from 'src/assets/figma/alsoLike/mobile/zx9.png'

const products = {
  HEADPHONES: [
    {
      photo: XX99_2,
      photo_also_like: XX99_MARK2_ALSO_LIKE,
      name: 'XX99 Mark II',
      intro:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      feature:
        'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
      price: '2,999',
      inTheBox: [
        [1, 'Headphone Unit'],
        [2, 'Replacement Earcups'],
        [1, 'User Manual'],
        [1, '3.5mm 5m Audio Cable'],
        [1, 'Travel Bag'],
      ],
      gallery: [XX99_2_GALLERY_1, XX99_2_GALLERY_2, XX99_2_GALLERY_3],
      alsoLike: [
        { category: 'HEADPHONES', id: 1, name: 'XX99 Mark I' },
        { category: 'HEADPHONES', id: 2, name: 'XX59' },
        { category: 'SPEAKERS', id: 0, name: 'ZX9 SPEAKER' },
      ],
    },

    {
      photo: XX99_1,
      photo_also_like: XX99_MARK1_ALSO_LIKE,
      name: 'XX99 Mark I',
      intro:
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      feature:
        'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
      price: '1,750',
      inTheBox: [
        [1, 'Headphone Unit'],
        [2, 'Replacement Earcups'],
        [1, 'User Manual'],
        [1, '3.5mm 5m Audio Cable'],
      ],
      gallery: [XX99_1_GALLERY_1, XX99_1_GALLERY_2, XX99_1_GALLERY_3],
      alsoLike: [
        { category: 'HEADPHONES', id: 0, name: 'XX99 Mark II' },
        { category: 'HEADPHONES', id: 2, name: 'XX59' },
        { category: 'SPEAKERS', id: 0, name: 'ZX9 SPEAKER' },
      ],
    },
    {
      photo: XX59,
      photo_also_like: XX59_ALSO_LIKE,
      name: 'XX59',
      intro:
        'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
      feature:
        'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
      price: '899',
      inTheBox: [
        [1, 'Headphone Unit'],
        [2, 'Replacement Earcups'],
        [1, 'User Manual'],
        [1, '3.5mm 5m Audio Cable'],
      ],
      gallery: [XX59_GALLERY_1, XX59_GALLERY_2, XX59_GALLERY_3],
      alsoLike: [
        { category: 'HEADPHONES', id: 0, name: 'XX99 Mark II' },
        { category: 'HEADPHONES', id: 2, name: 'XX59' },
        { category: 'SPEAKERS', id: 0, name: 'ZX9 SPEAKER' },
      ],
    },
  ],
  SPEAKERS: [
    {
      photo: ZX9,
      photo_also_like: ZX9_ALSO_LIKE,
      name: 'ZX9',
      intro:
        'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      feature:
        'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
      price: '4,500',
      inTheBox: [
        [2, 'Speaker Unit'],
        [2, 'Speaker Cloth Panel'],
        [1, 'User Manual'],
        [1, '3.5mm 10m Audio Cable'],
        [1, '10m Optical Cable'],
      ],
      gallery: [ZX9_GALLERY_1, ZX9_GALLERY_2, ZX9_GALLERY_3],
      alsoLike: [
        { category: 'SPEAKERS', id: 1, name: 'ZX7 SPEAKER' },
        { category: 'HEADPHONES', id: 1, name: 'XX99 Mark I' },
        { category: 'HEADPHONES', id: 2, name: 'XX59' },
      ],
    },

    {
      photo: ZX7,
      photo_also_like: ZX7_ALSO_LIKE,
      name: 'ZX7',
      intro:
        'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      feature:
        'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
      price: '3,500',
      inTheBox: [
        [2, 'Speaker Unit'],
        [2, 'Speaker Cloth Panel'],
        [1, 'User Manual'],
        [1, '3.5mm 7.5m Audio Cable'],
        [1, '7.5m Optical Cable'],
      ],
      gallery: [ZX7_GALLERY_1, ZX7_GALLERY_2, ZX7_GALLERY_3],
      alsoLike: [
        { category: 'SPEAKERS', id: 0, name: 'ZX9 SPEAKER' },
        { category: 'HEADPHONES', id: 1, name: 'XX99 Mark I' },
        { category: 'HEADPHONES', id: 2, name: 'XX59' },
      ],
    },
  ],
  EARPHONES: [
    {
      photo: YX1,
      name: 'YX1 WIRELESS',
      intro:
        'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
      feature:
        'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
      price: '599',
      inTheBox: [
        [2, 'Earphone Unit'],
        [6, 'Multi-size Earplugs'],
        [1, 'User Manual'],
        [1, 'USB-C Charging Cable'],
        [1, 'Travel Pouch'],
      ],
      gallery: [YX1_GALLERY_1, YX1_GALLERY_2, YX1_GALLERY_3],
      alsoLike: [
        { category: 'HEADPHONES', id: 1, name: 'XX99 Mark I' },
        { category: 'HEADPHONES', id: 2, name: 'XX59' },
        { category: 'SPEAKERS', id: 0, name: 'ZX9 SPEAKER' },
      ],
    },
  ],
}

export default products
