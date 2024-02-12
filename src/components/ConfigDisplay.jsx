import { useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { $test_value } from '../pages/index.astro'

export function ConfigDisplay() {

    const test_value = useStore($test_value)


    return <>

        <a>test</a>
        <a>{test_value}</a>
    </>
} 