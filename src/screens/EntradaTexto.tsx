

interface InputProps {
    label?: string;
    //Código oculto acima
     value?: string;
    onChangeText?:(text: string) => void
    }
    export function EntradaTexto ({ 
    label, 
     //Código oculto acima
    value,
    onChangeText
    } : InputProps) : JSX.Element {
    return (
    <FormControl mt={3}>
    {label && <FormControl.Label>{label}</FormControl.Label>}
    <Input
    placeholder={placeholder}
    //Código oculto acima
    value={value}
    onChangeText={onChangeText}
    />
    </FormControl>
    )    
}



