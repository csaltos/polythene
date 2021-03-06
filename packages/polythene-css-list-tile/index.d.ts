
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface ListTileVars {
  general_styles:                     boolean,
  compact_front_item_width:           number,
  compact_padding:                    number,
  compact_side_padding:               number,
  font_size_list_header:              number,
  font_size_navigation_title:         number,
  font_size_small:                    number,
  font_size_subtitle:                 number,
  font_size_title:                    number,
  font_weight_list_header:            number,
  font_weight_navigation_title:       number,
  font_weight_subtitle:               number,
  font_weight_title:                  number,
  front_item_width:                   number,
  has_high_subtitle_padding:          number,
  has_subtitle_padding:               number,
  high_subtitle_line_count:           number,
  inset_h_size:                       number,
  inset_v_size:                       number,
  line_height_subtitle:               number,
  padding:                            number,
  rounded_border_radius:              number,
  side_padding:                       number,
  single_height:                      number,
  single_line_height:                 number,
  single_with_icon_height:            number,
  single_with_icon_line_height:       number,
  subtitle_line_count:                number,
  title_line_count:                   number,
  color_light_title:                  string,
  color_light_subtitle:               string,
  color_light_info:                   string,
  color_light_front:                  string,
  color_light_text_disabled:          string,
  color_light_list_header:            string,
  color_light_secondary:              string,
  color_light_hover:                  string,
  color_light_hover_front:            string,
  color_light_hover_background:       string,
  color_light_focus_background:       string,
  color_light_selected_text:          string,
  color_light_selected_background:    string,
  color_light_highlight_background:   string,
  color_light_background?:            string,
  color_dark_title:                   string,
  color_dark_subtitle:                string,
  color_dark_info:                    string,
  color_dark_front:                   string,
  color_dark_text_disabled:           string,
  color_dark_list_header:             string,
  color_dark_secondary:               string,
  color_dark_hover:                   string,
  color_dark_hover_front:             string,
  color_dark_hover_background:        string,
  color_dark_selected_text:           string,
  color_dark_selected_background:     string,
  color_dark_highlight_background:    string,
  color_dark_background?:             string,
  inset:                              boolean,
  inset_h:                            boolean,
  inset_v:                            boolean,
  selected:                           boolean,
  rounded:                            boolean,

}
export const vars: ListTileVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
