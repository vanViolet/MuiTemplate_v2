import { CSSObject } from '@emotion/react'
import {
  Accordion,
  AccordionActions,
  AccordionActionsProps,
  AccordionDetails,
  AccordionDetailsProps,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Alert,
  AlertProps,
  AlertTitle,
  AlertTitleProps,
  Autocomplete,
  AutocompleteProps,
  Avatar,
  AvatarProps,
  Backdrop,
  BackdropProps,
  Badge,
  BadgeProps,
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationActionProps,
  BottomNavigationProps,
  Box,
  BoxProps,
  Breadcrumbs,
  BreadcrumbsProps,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
  Card,
  CardActionArea,
  CardActionAreaProps,
  CardActions,
  CardActionsProps,
  CardContent,
  CardContentProps,
  CardHeader,
  CardHeaderProps,
  CardMedia,
  CardMediaProps,
  CardProps,
  Checkbox,
  CheckboxProps,
  Chip,
  ChipProps,
  CircularProgress,
  CircularProgressProps,
  Container,
  ContainerProps,
  Dialog,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogContentText,
  DialogContentTextProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
  Divider,
  DividerProps,
  Drawer,
  DrawerProps,
  Fab,
  FabProps,
  Grid,
  Grid2Props,
  GridProps,
  LinearProgress,
  LinearProgressProps,
  Link,
  LinkProps,
  List,
  ListItemAvatar,
  ListItemAvatarProps,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
  ListItemTextProps,
  ListProps,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuList,
  MenuListProps,
  MenuProps,
  Paper,
  PaperProps,
  Radio,
  RadioProps,
  Rating,
  RatingProps,
  Select,
  SelectProps,
  Skeleton,
  SkeletonProps,
  Slider,
  SliderProps,
  Snackbar,
  SnackbarProps,
  Stack,
  Switch,
  SwitchProps,
  Table,
  TableBody,
  TableBodyProps,
  TableCell,
  TableCellProps,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableHeadProps,
  TableProps,
  TableRow,
  TableRowProps,
  TextField,
  TextFieldProps,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { StackProps } from '@mui/system'
import { IProps } from './CeTypes'

export function ELEMENTS({
  props,
  key,
  child,
  CSS,
}: {
  props?: any
  key?: number | undefined
  child?: any | undefined
  CSS?: any
}): Array<{ type: keyof IProps; element: JSX.Element }> {
  return [
    //Layout
    {
      type: 'Box',
      element: (
        <Box key={key} {...(props as BoxProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Box>
      ),
    },
    {
      type: 'Container',
      element: (
        <Container key={key} {...(props as ContainerProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Container>
      ),
    },
    {
      type: 'Grid',
      element: (
        <Grid key={key} {...(props as GridProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Grid>
      ),
    },
    {
      type: 'Grid2',
      element: (
        <Grid2 key={key} {...(props as Grid2Props)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Grid2>
      ),
    },
    {
      type: 'Stack',
      element: (
        <Stack key={key} {...(props as StackProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Stack>
      ),
    },

    // Inputs
    {
      type: 'Autocomplete',
      element: (
        <Autocomplete
          key={key}
          {...(props as AutocompleteProps<'', boolean | undefined, boolean | undefined, boolean | undefined>)}
          renderInput={(params) => <TextField {...params} />}
          options={(props as AutocompleteProps<'', boolean | undefined, boolean | undefined, boolean | undefined>)?.options ?? ['Dummy']}
          sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}
        />
      ),
    },
    {
      type: 'Button',
      element: (
        <Button key={key} {...(props as ButtonProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Button>
      ),
    },
    {
      type: 'ButtonGroup',
      element: (
        <ButtonGroup key={key} {...(props as ButtonGroupProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </ButtonGroup>
      ),
    },
    {
      type: 'Checkbox',
      element: <Checkbox key={key} {...(props as CheckboxProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Fab',
      element: (
        <Fab key={key} {...(props as FabProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Fab>
      ),
    },
    {
      type: 'Radio',
      element: <Radio key={key} {...(props as RadioProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Rating',
      element: <Rating key={key} {...(props as RatingProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Select',
      element: <Select key={key} {...(props as SelectProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Slider',
      element: <Slider key={key} {...(props as SliderProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Switch',
      element: <Switch key={key} {...(props as SwitchProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'TextField',
      element: <TextField key={key} {...(props as TextFieldProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'ToggleButtonGroup',
      element: (
        <ToggleButtonGroup key={key} {...(props as ToggleButtonGroupProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </ToggleButtonGroup>
      ),
    },
    {
      type: 'ToggleButton',
      element: (
        <ToggleButton key={key} {...(props as ToggleButtonProps)} value={(props as ToggleButtonProps)?.value ?? 'left'}>
          {child}
        </ToggleButton>
      ),
    },
    {
      type: 'Avatar',
      element: (
        <Avatar key={key} {...(props as AvatarProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Avatar>
      ),
    },
    {
      type: 'Badge',
      element: (
        <Badge key={key} {...(props as BadgeProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Badge>
      ),
    },
    {
      type: 'Chip',
      element: <Chip key={key} {...(props as ChipProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Divider',
      element: (
        <Divider key={key} {...(props as DividerProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Divider>
      ),
    },
    {
      type: 'List',
      element: (
        <List key={key} {...(props as ListProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </List>
      ),
    },
    {
      type: 'ListItem::Avatar',
      element: (
        <ListItemAvatar key={key} {...(props as ListItemAvatarProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </ListItemAvatar>
      ),
    },
    {
      type: 'ListItem::Button',
      element: (
        <ListItemButton key={key} {...(props as ListItemButtonProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </ListItemButton>
      ),
    },
    {
      type: 'ListItem::Icon',
      element: (
        <ListItemIcon key={key} {...(props as ListItemIconProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </ListItemIcon>
      ),
    },
    {
      type: 'ListItem::Text',
      element: (
        <ListItemText key={key} {...(props as ListItemTextProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </ListItemText>
      ),
    },
    {
      type: 'TableContainer',
      element: (
        <TableContainer key={key} {...(props as TableContainerProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </TableContainer>
      ),
    },
    {
      type: 'Table',
      element: (
        <Table key={key} {...(props as TableProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Table>
      ),
    },
    {
      type: 'Table::Head',
      element: (
        <TableHead key={key} {...(props as TableHeadProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </TableHead>
      ),
    },
    {
      type: 'Table::Body',
      element: (
        <TableBody key={key} {...(props as TableBodyProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </TableBody>
      ),
    },
    {
      type: 'Table::Row',
      element: (
        <TableRow key={key} {...(props as TableRowProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </TableRow>
      ),
    },
    {
      type: 'Table::Cell',
      element: (
        <TableCell key={key} {...(props as TableCellProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </TableCell>
      ),
    },
    {
      type: 'Tooltip',
      element: (
        <Tooltip key={key} {...(props as TooltipProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          <>
            {child} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}
          </>
        </Tooltip>
      ),
    },
    {
      type: 'Typography',
      element: (
        <Typography key={key} {...(props as TypographyProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Typography>
      ),
    },

    {
      type: 'Alert',
      element: (
        <Alert key={key} {...(props as AlertProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Alert>
      ),
    },

    {
      type: 'Alert::Title',
      element: (
        <AlertTitle key={key} {...(props as AlertTitleProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </AlertTitle>
      ),
    },

    {
      type: 'Backdrop',
      element: (
        <Backdrop key={key} {...(props as BackdropProps)} open={(props as BackdropProps)?.open ?? false}>
          {child}
        </Backdrop>
      ),
    },

    {
      type: 'Dialog',
      element: (
        <Dialog key={key} {...(props as DialogProps)} open={(props as DialogProps)?.open ?? false}>
          {child}
        </Dialog>
      ),
    },
    {
      type: 'Dialog::Title',
      element: (
        <DialogTitle key={key} {...(props as DialogTitleProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </DialogTitle>
      ),
    },
    {
      type: 'Dialog::Content',
      element: (
        <DialogContent key={key} {...(props as DialogContentProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </DialogContent>
      ),
    },
    {
      type: 'Dialog::ContentText',
      element: (
        <DialogContentText key={key} {...(props as DialogContentTextProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </DialogContentText>
      ),
    },
    {
      type: 'Dialog::Action',
      element: (
        <DialogActions key={key} {...(props as DialogActionsProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </DialogActions>
      ),
    },
    {
      type: 'CircularProgress',
      element: (
        <CircularProgress key={key} {...(props as CircularProgressProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />
      ),
    },
    {
      type: 'LinearProgress',
      element: <LinearProgress key={key} {...(props as LinearProgressProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Skeleton',
      element: <Skeleton key={key} {...(props as SkeletonProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Snackbar',
      element: <Snackbar key={key} {...(props as SnackbarProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }} />,
    },
    {
      type: 'Accordion',
      element: (
        <Accordion key={key} {...(props as AccordionProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          <Box>{child}</Box>
        </Accordion>
      ),
    },
    {
      type: 'Accordion::Summary',
      element: (
        <AccordionSummary key={key} {...(props as AccordionSummaryProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </AccordionSummary>
      ),
    },
    {
      type: 'Accordion::Details',
      element: (
        <AccordionDetails key={key} {...(props as AccordionDetailsProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </AccordionDetails>
      ),
    },
    {
      type: 'Accordion::Actions',
      element: (
        <AccordionActions key={key} {...(props as AccordionActionsProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </AccordionActions>
      ),
    },
    {
      type: 'Card',
      element: (
        <Card key={key} {...(props as CardProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Card>
      ),
    },
    {
      type: 'Card::Actions',
      element: (
        <CardActions key={key} {...(props as CardActionsProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </CardActions>
      ),
    },
    {
      type: 'Card::ActionArea',
      element: (
        <CardActionArea key={key} {...(props as CardActionAreaProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </CardActionArea>
      ),
    },
    {
      type: 'Card::Content',
      element: (
        <CardContent key={key} {...(props as CardContentProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </CardContent>
      ),
    },
    {
      type: 'Card::Header',
      element: (
        <CardHeader key={key} {...(props as CardHeaderProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </CardHeader>
      ),
    },
    {
      type: 'Card::Media',
      element: (
        <CardMedia
          key={key}
          {...(props as CardMediaProps)}
          image={(props as CardMediaProps)?.image ?? 'Dummy'}
          sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}
        />
      ),
    },
    {
      type: 'Paper',
      element: (
        <Paper key={key} {...(props as PaperProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Paper>
      ),
    },
    {
      type: 'BottomNavigation',
      element: (
        <BottomNavigation key={key} {...(props as BottomNavigationProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </BottomNavigation>
      ),
    },
    {
      type: 'BottomNavigation::Action',
      element: (
        <BottomNavigationAction
          key={key}
          {...(props as BottomNavigationActionProps)}
          sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}
        />
      ),
    },
    {
      type: 'Breadcrumbs',
      element: (
        <Breadcrumbs key={key} {...(props as BreadcrumbsProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Breadcrumbs>
      ),
    },
    {
      type: 'Drawer',
      element: (
        <Drawer key={key} {...(props as DrawerProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Drawer>
      ),
    },
    {
      type: 'Link',
      element: (
        <Link key={key} {...(props as LinkProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </Link>
      ),
    },
    {
      type: 'Menu',
      element: (
        <Menu key={key} {...(props as MenuProps)} open={(props as MenuProps)?.open ?? false}>
          {child}
        </Menu>
      ),
    },
    {
      type: 'Menu::Item',
      element: (
        <MenuItem key={key} {...(props as MenuItemProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </MenuItem>
      ),
    },
    {
      type: 'Menu::List',
      element: (
        <MenuList key={key} {...(props as MenuListProps)} sx={{ ...(CSS as CSSObject), ...(props as BoxProps)?.sx }}>
          {child}
        </MenuList>
      ),
    },
  ]
}

type ThereisNoChild =
  | 'Autocomplete'
  | 'Checkbox'
  | 'Radio'
  | 'Rating'
  | 'Select'
  | 'Slider'
  | 'Switch'
  | 'TextField'
  | 'Chip'
  | 'CircularProgress'
  | 'LinearProgress'
  | 'Skeleton'
  | 'Snackbar'
  | 'CardMedia'
  | 'BottomNavigation::Action'
