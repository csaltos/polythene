import { _CardActions, _CardMedia, _CardPrimary, _Card } from 'polythene-core-card';
import { cast, h, a, useState, useEffect, getRef } from 'cyano-react';
import { Icon } from 'polythene-react-icon';
import { ListTile } from 'polythene-react-list-tile';
import { Shadow } from 'polythene-react-shadow';

var CardActions = cast(_CardActions, {
  h: h,
  a: a
});
CardActions["displayName"] = "CardActions";

var CardMedia = cast(_CardMedia, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  getRef: getRef
});
CardMedia["displayName"] = "CardMedia";

var CardPrimary = cast(_CardPrimary, {
  h: h,
  a: a
});
CardPrimary["displayName"] = "CardPrimary";

var Card = cast(_Card, {
  h: h,
  a: a,
  CardActions: CardActions,
  CardMedia: CardMedia,
  CardPrimary: CardPrimary,
  Icon: Icon,
  ListTile: ListTile,
  Shadow: Shadow
});
Card["displayName"] = "Card";

export { Card };
