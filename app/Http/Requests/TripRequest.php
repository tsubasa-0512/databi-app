<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TripRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:50',
        ];
    }

    public function attributes()
    {
        return [
            'title' => 'タイトル',
            'departure' => '出発日',
            'arrival' => '帰宅日',
            'purpose' => '目的',
            'companion' => '同行者'
        ];
    }
}
