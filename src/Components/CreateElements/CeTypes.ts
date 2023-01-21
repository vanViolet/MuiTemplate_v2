import {
  AccordionActionsProps,
  AccordionDetailsProps,
  AccordionProps,
  AccordionSummaryProps,
  AlertProps,
  AlertTitleProps,
  AutocompleteProps,
  AvatarProps,
  BackdropProps,
  BadgeProps,
  BottomNavigationActionProps,
  BottomNavigationProps,
  BoxProps,
  BreadcrumbsProps,
  ButtonGroupProps,
  ButtonProps,
  CardActionsProps,
  CardContentProps,
  CardHeaderProps,
  CardMediaProps,
  CardProps,
  CheckboxProps,
  ChipProps,
  CircularProgressProps,
  ContainerProps,
  DialogActionsProps,
  DialogContentProps,
  DialogContentTextProps,
  DialogProps,
  DialogTitleProps,
  DividerProps,
  DrawerProps,
  FabProps,
  Grid2Props,
  GridProps,
  LinearProgressProps,
  LinkProps,
  ListItemAvatarProps,
  ListItemButtonProps,
  ListItemIconProps,
  ListItemTextProps,
  ListProps,
  MenuItemProps,
  MenuListProps,
  MenuProps,
  PaperProps,
  RadioProps,
  RatingProps,
  SelectProps,
  SkeletonProps,
  SliderProps,
  SnackbarProps,
  StackProps,
  SwitchProps,
  TableBodyProps,
  TableCellProps,
  TableContainerProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
  TextFieldProps,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  TooltipProps,
} from '@mui/material'
import { TypographyProps } from '@mui/system'

export type ConvertToOptional<T> = {
  [P in keyof T]?: T[P]
}

export interface IProps {
  Box: BoxProps
  Container: ContainerProps
  Grid: GridProps
  Grid2: Grid2Props
  Stack: StackProps

  // Inputs
  Autocomplete: ConvertToOptional<AutocompleteProps<'', boolean | undefined, boolean | undefined, boolean | undefined>>
  Button: ButtonProps
  ButtonGroup: ButtonGroupProps
  Checkbox: CheckboxProps
  Fab: FabProps
  Radio: RadioProps
  Rating: RatingProps
  Select: SelectProps
  Slider: SliderProps
  Switch: SwitchProps
  TextField: TextFieldProps
  ToggleButtonGroup: ToggleButtonGroupProps
  ToggleButton: ToggleButtonProps

  // Data Display
  Avatar: AvatarProps
  Badge: BadgeProps
  Chip: ChipProps
  Divider: DividerProps
  List: ListProps
  'ListItem::Button': ListItemButtonProps
  'ListItem::Icon': ListItemIconProps
  'ListItem::Text': ListItemTextProps
  'ListItem::Avatar': ListItemAvatarProps
  TableContainer: TableContainerProps
  Table: TableProps
  'Table::Head': TableHeadProps
  'Table::Body': TableBodyProps
  'Table::Row': ConvertToOptional<TableRowProps>
  'Table::Cell': TableCellProps
  Tooltip: ConvertToOptional<TooltipProps>
  Typography: TypographyProps

  //Feedback
  Alert: AlertProps
  'Alert::Title': AlertTitleProps
  Backdrop: BackdropProps
  Dialog: DialogProps
  'Dialog::Action': DialogActionsProps
  'Dialog::Content': DialogContentProps
  'Dialog::ContentText': DialogContentTextProps
  'Dialog::Title': DialogTitleProps
  CircularProgress: CircularProgressProps
  LinearProgress: LinearProgressProps
  Skeleton: SkeletonProps
  Snackbar: SnackbarProps

  //Surface
  Accordion: AccordionProps
  'Accordion::Summary': AccordionSummaryProps
  'Accordion::Details': AccordionDetailsProps
  'Accordion::Actions': AccordionActionsProps
  Card: CardProps
  'Card::ActionArea': CardActionsProps
  'Card::Actions': CardActionsProps
  'Card::Content': CardContentProps
  'Card::Header': CardHeaderProps
  'Card::Media': CardMediaProps
  Paper: PaperProps

  // Navigation
  BottomNavigation: BottomNavigationProps
  'BottomNavigation::Action': BottomNavigationActionProps
  Breadcrumbs: BreadcrumbsProps
  Drawer: DrawerProps
  // SwipeableDrawer: SwipeableDrawerProps
  Link: LinkProps
  Menu: ConvertToOptional<MenuProps>
  'Menu::Item': MenuItemProps
  'Menu::List': MenuListProps
  // TablePagination: TablePaginationProps

  // SpeedDial: SpeedDialProps
  // SpeedDialAction: SpeedDialActionProps
  // SpeedDialIcon: SpeedDialIconProps
  // Stepper: StepperProps
  // Step: StepProps
  // StepLabel: StepLabelProps
  // StepButton: StepButtonProps
  // StepIcon: StepIconProps
  // StepContent: StepContentProps
  // StepConnector: StepConnectorProps
  // MobileStepper: MobileStepperProps
  // Tabs: TabsProps
  // Tab: TabProps

  // // Utils
  // ClickAwayListener: ClickAwayListenerProps
  // Modal: ModalProps
  // TextareaAutosize: TextareaAutosizeProps
  // Collapse: CollapseProps
  // Fade: FadeProps
  // Grow: GrowProps
  // Slide: SlideProps
  // Zoom: ZoomProps
}

export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>

export type ValueOf<T, K extends keyof T> = T[K]
declare type ExclusiveValueOf<T, K extends keyof T, U extends keyof T[K] = keyof T[K]> = T[K][U] | T[K]

export type test = ExclusiveValueOf<IProps, 'Button'>

// const abs: keyof typeof test = 'test1'
