interface Props {
    preferenceValue: string;
}

export const PreferenceValueOption = ({ preferenceValue }: Props) => {
    return <option>{preferenceValue}</option>;
};
