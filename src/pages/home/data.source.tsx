import armorPlate from './../../assets/summary/armor_plate.png'
import castle from './../../assets/summary/castle.png'
import fireMagic from './../../assets/summary/fire_magic.png'
import questMap from './../../assets/summary/quest_map.png'

export const SummaryDataSource = {
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 12,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              armorPlate,
          },
          content: { children: 'Small Scale & Ganking' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 12,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              castle,
          },
          content: { children: 'Fort Sterling Based' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 12,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              fireMagic,
          },
          content: { children: 'Casually Competitive' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 12,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              questMap,
          },
          content: { children: 'Black Zone & Roads Hideout' },
        },
      },
    ],
  },
};