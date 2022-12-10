import {Component} from 'react'

import {
  MainContainer,
  MemeGeneratorContainer,
  Heading,
  MemeFormGeneratorContainer,
  MemeContainer,
  TextContent,
  MemeFormGenerator,
  CustomLabel,
  CustomInput,
  CustomInputSelect,
  CustomOption,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activateFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onChangeBgImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontsizeOptionId = event => {
    this.setState({activateFontSizeOptionId: event.target.value})
  }

  onSubmitAndGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activateFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: activateFontSizeOptionId,
    })
  }

  renderGeneratorForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activateFontSizeOptionId,
    } = this.state

    return (
      <MemeFormGenerator onSubmit={this.onSubmitAndGenerateMeme}>
        <CustomLabel htmlFor="backgroundImgUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Img Url"
          onChange={this.onChangeBgImage}
          id="backgroundImgUrl"
          value={backgroundImageUrlInput}
        />

        <CustomLabel htmlFor="toptext">Top Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="toptext"
          onChange={this.onChangeTopInput}
          id="toptext"
          value={topTextInput}
        />

        <CustomLabel htmlFor="bottomtext">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter the Bottom text"
          onChange={this.onChangeBottomInput}
          id="bottomtext"
          value={bottomTextInput}
        />

        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomInputSelect
          id="select"
          value={activateFontSizeOptionId}
          onChange={this.onChangeFontsizeOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomInputSelect>
        <CustomButton type="submit">Generate</CustomButton>
      </MemeFormGenerator>
    )
  }

  renderMemeGenerator = () => {
    const {backgroundImageUrl, topText, bottomText, activeFontSize} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSize={activeFontSize}>{topText}</TextContent>
        <TextContent activeFontSize={activeFontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <MainContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <MemeFormGeneratorContainer>
            {this.renderMemeGenerator()}
            {this.renderGeneratorForm()}
          </MemeFormGeneratorContainer>
        </MemeGeneratorContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
