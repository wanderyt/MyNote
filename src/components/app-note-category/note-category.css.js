import {
  StyleSheet
} from 'react-native';

import {BACKGROUND, CATEGORY_SELECTED} from '../../config/COLOR';

export const categoryItemStyles = StyleSheet.create({
  itemContainer: {
    width: 190,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: BACKGROUND,
  },
  subCatItemContainer: {
    width: 190,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: CATEGORY_SELECTED,
  },
  leftPanel: {
    width: 160,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    backgroundColor: CATEGORY_SELECTED,
  },
  categoryContent: {
    width: '100%',
    lineHeight: 40,
    paddingLeft: 20,
  },
  rightPanel: {
    flex: 1,
    flexDirection: 'column',
  },
  topDiv: {
    position: 'relative',
    backgroundColor: CATEGORY_SELECTED,
    width: 10,
    height: 10,
  },
  topQuarterRing: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: 10,
    borderBottomRightRadius: 10,
    backgroundColor: BACKGROUND,
  },
  midDiv: {
    width: 10,
    height: 40,
    backgroundColor: CATEGORY_SELECTED,
  },
  bottomQuarterRing: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: 10,
    borderTopRightRadius: 10,
    backgroundColor: BACKGROUND,
  },
  unSelectedItem: {
    width: 180,
    height: 60,
    paddingLeft: 30,
    lineHeight: 60,
  },
});

export const noteCategoryStyles = StyleSheet.create({
  noteCategory: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: BACKGROUND,
  },
  goBackIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F50',
    borderRadius: 5,
    padding: 2,
  },
  mainCategoryPanel: {
    // width: 170,
    // height: '100%',
    alignSelf: 'flex-start',
  },
  subCategoryPanel: {
    // height: '100%',
    flexGrow: 1
  },
});
