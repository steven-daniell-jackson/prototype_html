import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from "@angular/animations";

// export const myAnimation = trigger("myAnimation", [
//   transition("* => *", [
//     query(":enter", [style({ opacity: 0 })], { optional: true }),
//     query(
//       ":leave",
//       [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
//       { optional: true }
//     ),
//     query(
//       ":enter",
//       [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
//       { optional: true }
//     )
//   ])
// ]);

export const myAnimation = trigger("myAnimation", [
  transition("* => *", [
    query(":enter", [style({ opacity: 0 })], { optional: true }),
    query(
      ":leave",
      [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ":enter",
      [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const slideInAnimation = trigger("myAnimation", [
  transition("HomePage <=> AboutPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ]),
  transition("* <=> FilterPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("200ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);