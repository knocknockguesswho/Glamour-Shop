import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, SearchBar} from '../components/atoms';
import {AddressList, HeaderBackButton} from '../components/molecules';
import {connect} from 'react-redux';
import {getAddress} from '../redux/actions/address';

class ShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      address: null,
    };

    console.log(this.props, 'address');
  }

  fetchAddress = async () => {
    const {dispatch, auth, address} = this.props;
    const token = auth.data.token;
    await dispatch(getAddress(token))
      .then((res) => {
        // this.setState({address: address.data});
        if (address.data.length === 0) {
          return this.setState({address: null});
        }
        return this.setState({address: address.data});
        // console.log(address.data.length, 'address');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleBackButton = () => {
    this.props.navigation.goBack();
  };

  handleGoToChangeAddress = () => {
    this.props.navigation.push('ChangeAddress');
  };

  componentDidMount() {
    this.fetchAddress();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton
          submit={this.handleBackButton}
          middleComponent={true}
          midCompTitle="Shipping Address"
        />
        {/* <View style={styles.searchBarContainer}>
          <SearchBar
            placeholder="Search"
            value={this.state.search}
            type="web-search"
          />
        </View> */}
        <View style={styles.addressList}>
          <AddressList title="Shipping Address" address={this.state.address} />
        </View>
        <View>
          <Button
            title="ADD NEW ADDRESS"
            big={true}
            type="outline"
            submit={() => navigation.navigate('AddShippingAddress')}
          />
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    flex: 1,
    alignSelf: 'center',
  },
  searchBarContainer: {
    marginTop: width * 0.05,
    marginBottom: width * 0.03,
    alignItems: 'center',
  },
  addressList: {
    marginBottom: width * 0.04,
  },
});
const mapStateToProps = (state) => ({
  auth: state.auth,
  address: state.address,
});
export default connect(mapStateToProps)(ShippingAddress);
