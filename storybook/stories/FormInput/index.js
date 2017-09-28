import React from 'react';
import PropsTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AlertFillIcon from './AlertFillIcon';

export default class FormInput extends React.Component {
  render() {
    const warning = this.props.error;
    const myProps = {
      style: warning ? [ styles.input, styles.inputWarn ] : [ styles.input, styles.inputNorm ],
    };

    if (!this.props.reference) {
      myProps.reference = (input) => {
        this.props.form[this.props.index] = input;
      };
    }

    return (
      <View style={ styles.container }>
        <View style={ styles.labelConainer }>
          <Text style={ warning ? styles.errLabel : styles.label }>{ this.props.label }  </Text>
          {
            warning
            ?
              <AlertFillIcon
                color={ '#E74C3C' }
                width={ 16 }
                height={ 16 }
              />
            :
              <View
                style={ { width: 16, height: 16 } }
              />
          }
        </View>
        <TextInput
          { ...myProps }
          { ...this.props }
          ref={ this.props.reference }
          underlineColorAndroid="rgba(0,0,0,0)"
          autoCorrect={ false }
        />
      </View>
    );
  }
}

FormInput.propTypes = {
  label: PropsTypes.string,
  form: PropsTypes.array,
  error: PropsTypes.string,
  index: PropsTypes.number,
};

FormInput.defaultProps = {
  form: [],
  index: 0,
};

const styles = StyleSheet.create({
  labelConainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 8,
  },
  label: {
    fontSize: 12,
  },
  errLabel: {
    color: '#E74C3C',
    fontSize: 12,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    marginTop: 8,
    padding: 8,
  },
  inputNorm: {
    borderColor: '#D0D0D0',
  },
  inputWarn: {
    borderColor: '#E74C3C',
  },
});
