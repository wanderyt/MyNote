import React from 'react';
import {
  View,
  FlatList,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {categoryConfig} from './config';
import {noteCategoryStyles, categoryItemStyles} from './note-category.css';
import {AppContainer} from '../../../App';

class CategoryItem extends React.Component {
  _onCategorySelected = () => {
    const {isMainCategory, value} = this.props;
    if (isMainCategory) {
      this.props.onMainCategorySelected(value);
    } else {
      this.props.onSubCategorySelected(value);
    }
  }

  render() {
    const {isMainCategory, value, prevSelectedItem} = this.props;
    const isSelected = value === prevSelectedItem;
    if (isSelected) {
      return (
        <View style={categoryItemStyles.itemContainer}>
          <View style={categoryItemStyles.leftPanel}>
            <Text style={categoryItemStyles.categoryContent}>
              {this.props.value}
            </Text>
          </View>
          <View style={categoryItemStyles.rightPanel}>
            <View style={categoryItemStyles.topDiv}>
              <View style={categoryItemStyles.topQuarterRing}/>
            </View>
            <View style={categoryItemStyles.midDiv}/>
            <View style={categoryItemStyles.topDiv}>
              <View style={categoryItemStyles.bottomQuarterRing}/>
            </View>
          </View>
        </View>
      );
    } else {
      const containerStyle = isMainCategory ? categoryItemStyles.itemContainer : categoryItemStyles.subCatItemContainer;
      return (
        <View style={containerStyle}>
          <Text
            style={categoryItemStyles.unSelectedItem}
            onPress={this._onCategorySelected}>
            {this.props.value}
          </Text>
        </View>
      )
    }
  }
}

class NoteCategory extends React.Component {
  state = {
    curSelectedMainCategory: '',
    curSelectedSubCategory: '',
    subCategories: []
  }

  findSubCategory = (mainCategory) => {
    return categoryConfig.find((item) => {
      return item.mainCategory === mainCategory
    })['subCategory'];
  }

  onMainCategorySelected = (value) => {
    this.setState({
      curSelectedMainCategory: value,
      subCategories: this.findSubCategory(value)
    });
  }

  onSubCategorySelected = (value) => {
    this.setState({
      curSelectedSubCategory: value
    });

    this.props.navigator.push({
      title: 'My Expense Note',
      component: AppContainer,
      passProps: {
        categories: this.state.curSelectedMainCategory + '-' + value
      }
    });
  }

  renderMainCategoryItem = ({item}) => {
    return (
      <CategoryItem
        isMainCategory={true}
        value={item}
        onMainCategorySelected={this.onMainCategorySelected}
        prevSelectedItem={this.state.curSelectedMainCategory} />
    );
  }

  renderSubCategoryItem = ({item}) => {
    return (
      <CategoryItem
        isMainCategory={false}
        value={item}
        onSubCategorySelected={this.onSubCategorySelected} />
    );
  }

  _goBack = () => {
    const {curSelectedMainCategory} = this.state;
    this.props.navigator.pop();
  }

  render() {
    let mainCategories = [];
    categoryConfig.forEach((cur) => mainCategories.push(cur.mainCategory))
    return (
      <View style={noteCategoryStyles.noteCategory}>
        <View style={noteCategoryStyles.iconContainer}>
          <Icon
            containerStyle={noteCategoryStyles.goBackIcon}
            onPress={this._goBack}
            color='#517FA4'
            name='chevron-left' />
        </View>
        <View style={noteCategoryStyles.categoryContainer}>
          <FlatList
            keyExtractor={(item, idx) => idx}
            data={mainCategories}
            style={noteCategoryStyles.mainCategoryPanel}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderMainCategoryItem} />
          <FlatList
            keyExtractor={(item, idx) => idx}
            data={this.state.subCategories}
            style={noteCategoryStyles.subCategoryPanel}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderSubCategoryItem} />
        </View>
      </View>
    )
  }
}

export default NoteCategory;
